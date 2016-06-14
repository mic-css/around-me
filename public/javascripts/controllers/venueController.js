angular.module('aroundMe')
  .controller('VenueController', [function () {
    var self = this;

    self.greeting = "Hello world";

    var baseUrl = 'http://localhost:3000/venues';
    var query = '?coordinates=';
  }]);
