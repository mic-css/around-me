var request = require('request');
var async = require('async');
var venueFactory = require('../models/venueFactory');
var urlConstructor = require('../modules/urlConstructor');

exports.getVenues = function (req, res) {
  var locationUrl = urlConstructor.constructSearchUrl(req.query.coordinates);

  getVenueList(locationUrl).then(function (venues) {
    async.map(venues, updateVenueInfo, function (err, venues) {
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

function getVenueDetails(venue) {
  var url = urlConstructor.constructVenueUrl(venue.id);

  return new Promise(function (resolve, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        var venueInfo = JSON.parse(body).response.venue;

        venue = venueFactory.updateVenue(venue, venueInfo);
        resolve(venue);
      }
    });
  });
}

function getVenueHours(venue) {
  var url = urlConstructor.constructHoursUrl(venue.id);

  return new Promise(function (resolve, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        var venueHours = JSON.parse(body).response.hours;

        venue = venueFactory.updateVenue(venue, venueHours);
        resolve(venue);
      }
    });
  });
}

function updateVenueInfo(venue, callback) {
  var error;
  var venueUrl = urlConstructor.constructVenueUrl(venue.id);

  getVenueDetails(venue).then(getVenueHours(venue))
    .then(function (venue) {
      callback(error, venue);
    });
}
