var request = require('request');
var async = require('async');
var venueFactory = require('../models/venueFactory');
var urlConstructor = require('../modules/urlConstructor');

exports.getVenues = function (req, res) {
  var locationUrl = urlConstructor.constructUrl(req.query.coordinates);

  getVenueList(locationUrl).then(function (venues) {
    res.jsonp({ 'venues': venues });
  });
};

function getVenueList(url) {
  return new Promise(function (resolve, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        var apiVenues = JSON.parse(body).response.venues;

        async.map(apiVenues, venueFactory.createVenue, function (error, venues) {
          if (error) {
            reject(error);
          } else {
            resolve(venues);
          }
        });
      }
    });
  });
}

function getVenueInfo(venue) {
  // TODO: implement
}
