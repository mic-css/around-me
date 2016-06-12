// TODO: refactor into single

exports.constructVenueUrl = function(id) {
  var url = 'https://api.foursquare.com/v2/venues';
  var token = process.env.API_TOKEN;
  var version = process.env.API_VERSION;
  var params = ('?oauth_token=' + token + '&v=' + version);

  return url + '/' + id + params;
};

exports.constructUrl = function(coordinates) {
  var url = 'https://api.foursquare.com/v2/venues/search';
  var token = process.env.API_TOKEN;
  var version = process.env.API_VERSION;
  var limit = 10;
  var params = ('?ll=' + coordinates + '&limit=' + limit + '&oauth_token=' + token + '&v=' + version);

  return url + params;
};
