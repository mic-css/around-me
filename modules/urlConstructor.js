// TODO: refactor into single

exports.constructSearchUrl = function (coordinates) {
  var url = process.env.API_URL;
  var token = process.env.API_TOKEN;
  var version = process.env.API_VERSION;
  var limit = 10;
  var params = ('?ll=' + coordinates + '&limit=' + limit + '&oauth_token=' + token + '&v=' + version);

  return url + '/search' + params;
};

exports.constructVenueUrl = function (id) {
  var url = process.env.API_URL;
  var token = process.env.API_TOKEN;
  var version = process.env.API_VERSION;
  var params = ('?oauth_token=' + token + '&v=' + version);

  return url + '/' + id + params;
};


exports.constructHoursUrl = function (id) {
  var url = process.env.API_URL;
  var token = process.env.API_TOKEN;
  var version = process.env.API_VERSION;
  var params = ('?oauth_token=' + token + '&v=' + version);

  return url + '/' + id + '/hours' + params;
};
