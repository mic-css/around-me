angular.module('aroundMe')
  .service('PositionService', ['$q', function ($q) {
    var self = this;

    self.getCoordinates = function () {
      return $q(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(function success(position) {
          resolve(position.coords);
        }, function error(err) {
          reject(err);
        });
      });
    };
  }]);
