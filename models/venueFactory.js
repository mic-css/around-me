var Venue = require('./venue');

exports.createVenue = function(args, callback) {
  var venue, error;
  var noArgs = Object.getOwnPropertyNames(args).length === 0;

  if (noArgs) {
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

  if (typeof Venue == 'undefined') {
    error = new Error('Failed to initialize new Venue instance');
  }

  callback(error, venue);
};
