import jwt
from rest_framework import authentication
from rest_framework.exceptions import AuthenticationFailed, ParseError, NotFound
from django.contrib.auth import get_user_model
from backend.settings import SECRET_KEY
from .models import Student

class LoginJwtAuthentication(authentication.BaseAuthentication):
    def auth_without_credentials(self, request):
        post_data = request.POST

        try:
            user = get_user_model().objects.get(username=post_data["username"])

            if not user.check_password(post_data["password"]):
                raise NotFound("")
            
            Student.objects.get(user_object=user)

            return None

        except get_user_model().DoesNotExist:
            raise NotFound("")
        
        except Student.DoesNotExist:
            raise NotFound("")



    def authenticate(self, request):
        jwt_token = request.META.get('HTTP_AUTHORIZATION')

        if not jwt_token:
            # Login without credentials
            return self.auth_without_credentials(request)
        
        jwt_token = jwt_token.replace("JWT", "").strip()
        payload = ""


        try:
            payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=['HS256'])

        except jwt.exceptions.InvalidSignatureError:
            raise AuthenticationFailed("Invalid Signature")
        
        except ParseError:
            raise ParseError("Failed to parse token")
        
        except:
            pass

        user = None

        try:
            user = Student.objects.filter(pk=int(payload["user_id"]))

        except TypeError:
            pass

        if not user:
            return None
        
        
        user_obj = user[0].user_object

        return user_obj, payload
        
    def get_user(self, user_id):
        try:
            return get_user_model().objects.get(pk=user_id)
        except get_user_model().DoesNotExist:
            return None