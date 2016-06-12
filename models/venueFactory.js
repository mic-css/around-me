var Venue = require('./venue');

exports.createVenue = function(args, callback) {
  var venue, error;
  var noArgs = Object.getOwnPropertyNames(args).length === 0;

  if (typeof args === 'undefined' || noArgs) {
    error = new Error('No argument passed to venueFactory');
  }

  // var bestPhoto = constructPhotoUrl(args.bestPhoto.prefix, args.bestPhoto.suffix);

  // var apiPhotos = args.photos.groups.items;
  // var photoList = constructPhotoList(apiPhotos);
  //
  // function constructPhotoList(apiPhotos) {
  //   var photoList = [];
  //
  //   apiPhotos.forEach(function (photo) {
  //     photoList.push(constructPhotoUrl(photo.prefix, photo.suffix));
  //   });
  //
  //   return photoList;
  // }
  //
  // function constructPhotoUrl(prefix, suffix) {
  //   return prefix.replace(/\/$/, '') + suffix;
  // }

  venue = new Venue({
    id : args.id,
    name : args.name,
    description : args.description
    // bestPhoto : bestPhoto,
    // photos : photoList,
    // hours : args.hours
  });

  if (typeof callback !== 'undefined') {
    callback(error, venue);
  } else if (typeof error !== 'undefined') {
    throw error;
  } else {
    return venue;
  }
};
