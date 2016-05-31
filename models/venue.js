function Venue(args = {}) {
  this.name = args.name;
  this.description = args.description;
  this.hours = args.hours;
  this.photos = args.photos;
}

Venue.prototype.isOpen = function () {
  // TODO: implement opening hours logic
  return true;
};
