angular.module('aroundMe')
  .controller('VenueController', ['PositionService', 'APIService', function (PositionService, APIService) {
    var self = this;

    var baseUrl = 'http://localhost:3000/venues';
    var query = '?coordinates=';

    PositionService.getCoordinates().then(function positionSuccess(coordinates) {
      var apiUrl = constructAPIUrl(coordinates.latitude, coordinates.longitude);

      APIService.get(apiUrl).then(function apiSuccess(result) {
        self.venues = result.data.venues;
      }, function apiError(err) {
        console.warn('Failed to retrieve venues: ' + err);
      });
    }, function positionError(err) {
      console.warn('Failed to retrieve location: ' + err);
    });

    function constructAPIUrl(latitude, longitude) {
      return (baseUrl + query + latitude + ',' + longitude);
    }
  }]);
