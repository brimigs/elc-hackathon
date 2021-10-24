"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path, re_path

import backend_app.views as views

urlpatterns = [
    # basic pages
    re_path(r'^$', views.basic, name='index'),
    re_path(r'^App/$', views.basic, name='app'),
    re_path(r'^Beauty/$', views.basic, name='beauty'),
    re_path(r'^Color/$', views.basic, name='color'),

    # REST API endpoints
    re_path(r'^api/skinTone/$', views.skin_tone, name="skin_tone"),

    path('admin/', admin.site.urls),
]
