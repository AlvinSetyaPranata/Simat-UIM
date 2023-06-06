"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from user_management.views import LoginView, get_csrf_token, StudentRegistration, StudentView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('api/auth/login/', LoginView.as_view()),
    path('api/auth/login/_refresh/', TokenRefreshView.as_view()),
    path('api/auth/register/', StudentRegistration.as_view()),
    path('api/_get_csrf/', get_csrf_token),
    path('api/user/', StudentView.as_view()),
]
