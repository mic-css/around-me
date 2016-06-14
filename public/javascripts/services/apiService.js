angular.module('aroundMe')
  .service('APIService', ['$q', '$http', function ($q, $http) {
    var self = this;

    self.get = $http.get;
  }]);
