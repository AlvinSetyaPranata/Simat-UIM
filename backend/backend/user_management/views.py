from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import  AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

from .models import Student, Teacher
from .serializers import UserSerializers, StudentSerializer
from json import loads
from json.decoder import JSONDecodeError




class LoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, req):
        post_data = req.POST.copy()
        user_model = get_user_model()
        student_model = Student

        student_id = None
        # Check Access Token
        user = None
    
        if "access" in req.COOKIES:
            print(type(AccessToken(req.COOKIES['access'])))
            try:
                student_id = AccessToken(req.COOKIES['access'])["student_id"]

            except TokenError:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            
            except InvalidToken:
                return Response(status=status.HTTP_401_UNAUTHORIZED)

        if not student_id:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


            # Check is username exists
        try:
            user = student_model.objects.get(id=student_id)

        except student_model.DoesNotExist:
            # Username doesn't exists
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        response = Response()

        # To protect against XSS vulnarubilty
        response.set_cookie('access', '{access}', httponly=True, samesite="Strict")
        response.set_cookie('refresh', '{access}', httponly=True, samesite="Strict")

        return response
    


class StudentRegistration(APIView):
    permission_classes = (AllowAny,)

    def post(self, req):
        post_data = req.POST.copy()
        account_data = ()


        try:
            account_data = loads(post_data.pop('account')[0])

        except JSONDecodeError:
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


        refresh_token = RefreshToken.for_user(user)
        access_token = refresh_token.access_token 

        response = Response()
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


@ensure_csrf_cookie
def get_csrf_token(req):
    return Response({}, status=200)
