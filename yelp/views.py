from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from yelp.repositories import YelpRepository

def home(request):
    locations = YelpRepository().get_search_results("test")
    return render(request, 'home.html', {'locations': locations})


# Create your views here.
