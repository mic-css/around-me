function Venue(name, description, bestPhoto, photos, hours) {
  this.name = name;
  this.description = description || '';
  this.bestPhoto = bestPhoto || '';
  this.photos = photos || [];
  this.hours = hours || {};
}

Venue.prototype.isOpen = function () {
  // TODO: implement opening hours logic
  return true;
};

module.exports = Venue;
