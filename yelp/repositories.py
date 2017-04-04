from __future__ import unicode_literals
from yelp.services import YelpService

class YelpRepository:
    def __init__(self, attributes = {}):
        self.name = self.check_attributes(attributes, 'name')
        self.address = self.check_attributes(attributes, 'address1')
        self.phone = self.check_attributes(attributes, 'display_phone')
        self.price = self.check_attributes(attributes, 'price')
        self.rating = self.check_attributes(attributes, 'rating')
        self.coordinates = self.check_attributes(attributes, 'coordinates')

    def check_attributes(self, all_attributes, attribute):
        if 'location' in all_attributes and attribute in all_attributes['location']:
            return all_attributes['location'][attribute]
        elif attribute in all_attributes:
            return all_attributes[attribute]
        else:
            return None

    def get_search_results(self, search_params):
        return [YelpRepository(item) for item in YelpService().search()['businesses']]
