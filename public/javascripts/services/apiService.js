angular.module('aroundMe')
  .service('apiService', ['$http', function ($http) {
    var self = this;

    this.get = function (url) {
      $http.get(url);
    };
  }]);
