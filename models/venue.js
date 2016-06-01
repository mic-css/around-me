function Venue(args = {}) {
  this.name = args.name;
  this.description = args.description || '';
  this.bestPhoto = args.bestPhoto || '';
  this.photos = args.photos || [];
  this.hours = args.hours || {};
  this.open = isOpen();

  function isOpen() {
    // TODO: implement
    return true;
  }
}

module.exports = Venue;
