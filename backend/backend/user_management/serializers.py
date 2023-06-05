from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import Student


class UserSerializers(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"
        read_only_fields = ('id',)


    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])

        _model = get_user_model()

        _user = _model.objects.create(**validated_data)

        return _user     


class StudentSerializer(ModelSerializer):
    # user_object = UserSerializers()
    class Meta:
        model = Student
        fields = "__all__"
        read_only_fields = ('id',)


    def create(self, validated_data):
        _model = Student

        _student = _model.objects.create(**validated_data)

        return _student
