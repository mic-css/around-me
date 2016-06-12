var request = require('request');
var async = require('async');
var venueFactory = require('../models/venueFactory');
var urlConstructor = require('../modules/urlConstructor');

exports.getVenuesList = function (req, res) {

  request.get(urlConstructor.constructUrl(req), function (err, response, body) {
    if (err) {
      res.status(400).jsonp({'ERROR': err});
    } else {
      var venues = [];

      var apiVenues = JSON.parse(body).response.venues;

      var venueUrls = apiVenues.map(function (venue) {
        return urlConstructor.constructVenueUrl(venue.id);
      });

      apiVenues.forEach(function (apiVenue) {
        venues.push(venueFactory.createVenue(apiVenue));
      });

      res.jsonp({'venues': venues});

    }
  });
};
