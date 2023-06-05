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

    """
    Request

    {
        'student_name' : {student_name},
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
            try:
                student_id = AccessToken(req.COOKIES['access']).payload['user_id']


            except TokenError:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            
            except InvalidToken:
                return Response(status=status.HTTP_401_UNAUTHORIZED)


            try:
                student = Student.objects.get(id=student_id)
                # Get all user data
                return Response(StudentSerializer(student).data)

            except get_user_model().DoesNotExist:
                # Username doesn't exists
                return Response(status=status.HTTP_404_NOT_FOUND)


        try:
            user = get_user_model().objects.get(username=post_data['username'])
            student = Student.objects.get(user_object=user)

        except student.DoesNotExist:
            # Username doesn't exists
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        except user.DoesNotExist:
            # Student doesn't exists
            return Response(status=status.HTTP_404_NOT_FOUND)


        response = Response(student)
        token = RefreshToken.for_user(student)

        # To protect against XSS vulnarubilty
        response.set_cookie('access', str(token.access_token), httponly=True, samesite="Strict")
        response.set_cookie('refresh', str(token), httponly=True, samesite="Strict")

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


        refresh_token = RefreshToken.for_user(student_serializer)
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
