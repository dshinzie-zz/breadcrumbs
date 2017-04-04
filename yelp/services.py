from __future__ import print_function
from django.conf import settings

import argparse
import json
import pprint
import requests
import sys
import urllib  #to change dict into query params

try:
    # For Python 3.0 and later
    from urllib.error import HTTPError
    from urllib.parse import quote
    from urllib.parse import urlencode
except ImportError:
    # Fall back to Python 2's urllib2 and urllib
    from urllib2 import HTTPError
    from urllib import quote
    from urllib import urlencode

class YelpService:
    def __init__(self):
        self.api_host = 'https://api.yelp.com'
        self.search_path = '/v3/businesses/search'
        self.business_path = '/v3/businesses/'
        self.token_path = '/oauth2/token'
        self.grant_type = 'client_credentials'

    def get_token(self):
        url = '{0}{1}'.format(self.api_host, self.token_path)
        data = urlencode({
            'client_id': settings.CLIENT_ID,
            'client_secret': settings.CLIENT_SECRET,
            'grant_type': self.grant_type
        })
        headers = {
            'content-type': 'application/x-www-form-urlencoded',
        }
        response = requests.request('POST', url, data=data, headers=headers)
        bearer_token = response.json()['access_token']
        return bearer_token

    @staticmethod
    def parse_params(input_params):
        return {
            'term': 'asian',
            'latitude': 39.6645260,
            'longitude': -104.9825840,
            'price': 1,
            'radius': 20000
        }

    def get_search_results(self, input_params):
        bearer_token = self.get_token()
        url_params = self.parse_params(input_params)



    # # Without the main sentinel, the code would be executed even if the script were imported as a module.
    # def main():
    #     pass
    #
    # if __name__ == '__main__':
    #     main()
