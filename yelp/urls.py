from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home, name='root'),
    url(r'^locations$', views.locations, name='locations'),
]
