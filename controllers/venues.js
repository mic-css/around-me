var request = require('request');
var venueFactory = require('../models/venueFactory');

exports.getVenuesList = function (req, res) {
  function constructUrl() {
    var url = 'https://api.foursquare.com/v2/venues/search';
    var coordinates = req.query.coordinates;
    var token = process.env.API_TOKEN;
    var version = process.env.API_VERSION;
    var limit = 10;
    var params = ('?ll=' + coordinates + '&limit=' + limit + '&oauth_token=' + token + '&v=' + version);

    return url + params;
  }

  request.get(constructUrl(), function (err, response, body) {
    if (err) {
      res.status(400).jsonp({'ERROR': err});
    } else {
      var apiVenues = JSON.parse(body).response.venues;
      var venues = [];

      apiVenues.forEach(function (apiVenue) {
        venues.push(venueFactory.createVenue(apiVenue));
      });

      res.jsonp({
        'venues': venues
      });
    }
  });
};
