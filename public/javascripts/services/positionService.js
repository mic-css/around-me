angular.module('aroundMe')
  .service('PositionService', [function () {
    var self = this;

    self.coordinates = navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      return position.coordinates;
    }

    function error(error) {
      return new Error(error);
    }
  }]);
