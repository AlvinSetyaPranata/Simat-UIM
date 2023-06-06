import jwt
from rest_framework import authentication
from rest_framework.exceptions import AuthenticationFailed, ParseError
from backend.settings import SECRET_KEY
from .models import Student

class LoginJwtAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request, **data):
        jwt_token = request.META.get('HTTP_AUTHORIZATION')

        print(jwt_token)

        if not jwt_token:
            raise ParseError("Invalid JWT Token")
        
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
        
        post_data = request.POST
        
        user_obj = user[0].user_object
        # is_valid_pass = user_obj.check_password(post_data["password"])

    
        print(post_data)

        request.is_authenticated = True

        return user, None