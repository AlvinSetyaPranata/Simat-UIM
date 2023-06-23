from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.middleware.csrf import get_token
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import  AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework.authentication import authenticate
from django.utils.timezone import now

from .models import Student, Teacher
from .serializers import UserSerializers, StudentSerializer
from json import loads
from json.decoder import JSONDecodeError

from datetime import (
    datetime, timedelta
)

from backend.settings import SIMPLE_JWT




class StudentView(APIView):
    permission_classes = (IsAuthenticated,)


    def get(self, req):
        print(req.COOKIES)



        return Response({'he' : 'asdd '})


class LoginView(APIView):
    permission_classes = (AllowAny,)

    """
    Request

    {
        'username' : {username},
        'password' : {password}
    }
    
    """



    def post(self, req):
        post_data = req.POST.copy()
        user_model = get_user_model()
        student_model = Student

        student_id = None
        # Check Access Token

    
        if "access" in req.COOKIES:
            # Token check
            try:
                student_id = AccessToken(req.COOKIES['access']).payload['user_id']


            except TokenError:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            
            except InvalidToken:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            
            user = authenticate(req, **post_data)



            # Check student if exists
            try:
                Student.objects.get(id=student_id)
                return Response(status=status.HTTP_200_OK)

            except Student.DoesNotExist:
                # Username doesn't exists
                return Response(status=status.HTTP_404_NOT_FOUND)

        # User doesnt have access and refresh token
        try:
            # user = authenticate(req, **post_data)
            authenticate(req)
            user = get_user_model().objects.get(username=post_data["username"])
            
            if not user.check_password(post_data["password"]):
                return Response(status=status.HTTP_404_NOT_FOUND)

            student = Student.objects.get(user_object=user)

        except Student.DoesNotExist:
            # Student doesn't exists
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        except get_user_model().DoesNotExist:
            # Username doesn't exists
            return Response(status=status.HTTP_404_NOT_FOUND)


        token = RefreshToken.for_user(student)


        data = {
            'access' : {
                'value' : str(token.access_token),
                'samesite' : 'Strict',
                'secure' : 'true',
                'expires' : 24
            },
            'refresh' : {
                'value' : str(token),
                'samesite' : 'Strict',
                'secure' : 'true',
                'expires' : 24 * 7
            },
        }


        return Response(data)
    


class StudentRegistration(APIView):
    permission_classes = (AllowAny,)

    def post(self, req):
        post_data = req.POST.copy()
        account_data = ()


        try:
            account_data = loads(post_data.pop('account')[0])

        except JSONDecodeError:
            print("hellow")
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

        if get_user_model().objects.filter(username=account_data['username']).exists():
            return Response(status=status.HTTP_409_CONFLICT)


        if Student.objects.filter(name=post_data['name']).exists():
            return Response(status=status.HTTP_409_CONFLICT)



        user_serializer = UserSerializers(data=account_data)

        if not user_serializer.is_valid():
            return Response(status=status.HTTP_409_CONFLICT)

        user_serializer.save()

        user = get_user_model().objects.get(username=user_serializer.initial_data['username'])

        post_data["user_object"] = user.pk

        
        student_serializer = StudentSerializer(data=post_data)

        if not student_serializer.is_valid():
            return Response(status=status.HTTP_409_CONFLICT)


        student_serializer.save()


        refresh_token = RefreshToken.for_user(student_serializer)
        access_token = refresh_token.access_token 

        response = Response(status=status.HTTP_201_CREATED)
        response.set_cookie(key='access', value=str(access_token), httponly=True, samesite="Strict")
        response.set_cookie(key='refresh', value=str(refresh_token), httponly=True, samesite="Strict")


        return response



class StudentData(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, req):
        cookies = req.COOKIES

        if not "access" in cookies:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        access = AccessToken()




"""
Under Development
"""

# @api_view(['POST'])
# def staff_register(req):
#     post_data = dict(req.POST.iterlists())


#     # Validate Form



#     # Creating user
#     user = get_user_model()

#     user.objects.create_staffuser(**post_data)

#     return Response({})

# @api_view(['POST'])
# def maintaners_register(req):
#     post_data = dict(req.POST.iterlists())


#     # Validate Form



#     # Creating user
#     user = get_user_model()

#     user.objects.create_superuser(**post_data)

#     return Response({})

@api_view(['POST'])
def get_csrf_token(req):
    return Response({'csrftoken' : get_token(req)})
