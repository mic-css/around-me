angular.module('aroundMe')
  .controller('VenueController', ['PositionService', function (PositionService) {
    var self = this;

    var baseUrl = 'http://localhost:3000/venues';
    var query = '?coordinates=';
    
    PositionService.getCoordinates().then(function success(coordinates) {
      self.coordinates = coordinates;
    }, function error(err) {
      console.warn('Failed to retrieve location: ' + err);
    });
  }]);
