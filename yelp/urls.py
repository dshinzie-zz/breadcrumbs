from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home, name='root'),
    url(r'^api/v1/locations$', views.locations, name='locations'),
]
