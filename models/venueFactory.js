var Venue = require('./venue');

exports.createVenue = function(args, callback) {
  var venue, error;

  if (typeof args === 'undefined') {
    error = new Error('No argument passed to venueFactory');
  }

  venue = new Venue({
    id : args.id,
    name : args.name,
    description : args.description
  });

  if (typeof callback === 'function') {
    callback(error, venue);
  } else if (typeof error !== 'undefined') {
    throw error;
  } else {
    return venue;
  }
};

exports.updateVenue = function (venue, args, callback) {
  var error;

  if (typeof args === 'undefined') {
    error = new Error('No argument passed to venueFactory');
  } else {
    if (typeof args.description !== 'undefined') {
      venue.description = args.description;
    }

    if (args.photos.count > 0) {
      var apiPhotos = args.photos.groups[0].items;
      venue.photos = constructPhotoList(apiPhotos);
    }

    if (typeof args.hours !== 'undefined') {
      venue.open = args.hours.isOpen;
    }
  }

  if (typeof callback === 'function') {
    callback(error, venue);
  } else if (typeof error !== 'undefined') {
    throw error;
  } else {
    return venue;
  }
};

function constructPhotoList(photos) {
  var photoList = [];

  photos.forEach(function (photo) {
    photoList.push(constructPhotoUrl(photo.prefix, photo.suffix));
  });

  return photoList;
}

function constructPhotoUrl(prefix, suffix) {
  var size = '500x500';
  return prefix + size + suffix;
}
