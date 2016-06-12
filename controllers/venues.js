var request = require('request');
var async = require('async');
var venueFactory = require('../models/venueFactory');
var urlConstructor = require('../modules/urlConstructor');

exports.getVenues = function (req, res) {
  var locationUrl = urlConstructor.constructUrl(req.query.coordinates);

  getVenueList(locationUrl).then(function (venues) {
    async.map(venues, getVenueInfo, function (err, venues) {
      if (err) {
        res.jsonp({ 'error': err });
      } else {
        res.jsonp({ 'venues': venues });
      }
    });
  });
};

function getVenueList(url) {
  return new Promise(function (resolve, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        var apiVenues = JSON.parse(body).response.venues;

        async.map(apiVenues, venueFactory.createVenue, function (err, venues) {
          if (err) {
            reject(err);
          } else {
            resolve(venues);
          }
        });
      }
    });
  });
}

function getVenueInfo(venue, callback) {
  var error;
  var venueUrl = urlConstructor.constructVenueUrl(venue.id);

  request.get(venueUrl, function (err, response, body) {
    if (err) {
      callback(error);
    } else {
      var venueInfo = JSON.parse(body).response.venue;

      venueFactory.updateVenue(venue, venueInfo, function (err, venue) {
        if (err) {
          callback(error);
        } else {
          callback(error, venue);
        }
      });
    }
  });
}
