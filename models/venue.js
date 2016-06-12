function Venue(args = {}) {
  this.id = args.id;
  this.name = args.name;
  this.description = args.description || '';
  this.photos = args.photos || [];
  this.hours = args.hours || {};
  this.open = isOpen();
}

function isOpen() {
  // TODO: implement
  return true;
}

module.exports = Venue;
