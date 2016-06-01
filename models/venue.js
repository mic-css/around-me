function Venue(args = {}) {
  this.name = args.name;
  this.description = args.description || '';
  this.bestPhoto = args.bestPhoto || '';
  this.photos = args.photos || [];
  this.hours = args.hours || {};
}

Venue.prototype.isOpen = function () {
  // TODO: implement opening hours logic
  return true;
};

module.exports = Venue;
