from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from collections.abc import Iterable
from json import loads

from .models import Student

class UserSerializers(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['username', 'is_staff', 'is_admin', 'last_login', 'date_created']             


class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        read_only_fields = ('id',)
