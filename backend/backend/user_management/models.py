from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)


class UserManager(BaseUserManager):
    def create_user(self, username, password, **kwargs):
        if not all((username)):
            raise ValueError("Username and Email must specified")
        
        user = self.model(username=username, **kwargs)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    # Model for Teacher / Staff
    def create_staffuser(self, username, password):
        return self.create_user(username, password, is_staff=True)
    
    
    # Model for Maintaners
    def create_superuser(self, username, password):
        return self.create_user(username, password, is_admin=True)


class User(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(verbose_name="id", primary_key=True)
    username = models.CharField(max_length=255, verbose_name="Nama Pengguna", unique=True)
    is_staff = models.BooleanField(verbose_name="Staff", default=False)
    is_admin = models.BooleanField(verbose_name="Admin", default=False) 
    last_login = models.DateTimeField(verbose_name="Terakhir Masuk", auto_now=True)
    date_created = models.DateTimeField(verbose_name="Terdaftar Pada", auto_now_add=True, editable=False)


    def has_module_perms(self, app_label):
        return True
    
    def has_perm(self, perm, obj=None):
        return True
    
    def has_perms(self, perm_list):
        return True



    objects = UserManager()

    USERNAME_FIELD = 'username'



class Student(models.Model):
    id = models.BigAutoField(verbose_name="id", primary_key=True)
    name = models.CharField(max_length=255, verbose_name="Nama Siswa", unique=True)
    age = models.IntegerField(verbose_name="Umur Siswa", default=0)
    gender = models.CharField(max_length=20, default='Pria')
    user_object = models.ForeignKey(to=User, on_delete=models.CASCADE)


    def save(self, *args, **kwargs):        
        _junk = kwargs.pop('using')
        del _junk
        return super().save(*args, using=self._state.db, **kwargs)



class Teacher(models.Model):
    id = models.BigAutoField(verbose_name="id", primary_key=True)
    name = models.CharField(max_length=255, verbose_name="Nama Siswa", unique=True)
    age = models.IntegerField(verbose_name="Umur Siswa", default=0)
    gender = models.CharField(max_length=20, default='Pria')
    user_object = models.ForeignKey(to=User, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        _junk = kwargs.pop('using')
        del _junk
        return super().save(*args, using=self._state.db, **kwargs)
