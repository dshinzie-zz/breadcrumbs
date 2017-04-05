from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.http import JsonResponse

from yelp.repositories import YelpRepository

def home(request):
    return render(request, 'home.html')

def locations(request):
    def _get_location_attributes(locations):
        return [{
            'name': location.name,
            'address': location.address,
            'phone': location.phone,
            'price': location.price,
            'rating': location.rating,
            'coordinates': location.coordinates
        } for location in locations]
    
    locations = _get_location_attributes(YelpRepository().get_search_results("test"))
    return JsonResponse(locations, safe=False)
