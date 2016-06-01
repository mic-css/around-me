var Venue = require('./venue');

exports.createVenue = function(args = {}) {
  var noArgs = Object.getOwnPropertyNames(args).length === 0;

  if (noArgs) {
    return false;
  }

  return new Venue({
    name : args.name
  });
};
