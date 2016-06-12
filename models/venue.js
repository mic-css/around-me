function Venue(args = {}) {
  this.id = args.id || null;
  this.name = args.name || null;
  this.description = args.description || null;
  this.photos = args.photos || [];
  this.open = args.open || null;
}

function isOpen() {
  // TODO: implement
  return true;
}

module.exports = Venue;
