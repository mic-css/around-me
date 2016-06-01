var Venue = require('./venue');

exports.createVenue = function(args = {}) {
  var noArgs = Object.getOwnPropertyNames(args).length === 0;

  if (noArgs) {
    return false;
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

  return new Venue({
    name : args.name,
    description : args.description
    // bestPhoto : bestPhoto,
    // photos : photoList,
    // hours : args.hours
  });
};
