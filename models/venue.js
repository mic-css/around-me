function Venue(args = {}) {
  this.id = args.id || null;
  this.name = args.name || null;
  this.description = args.description || null;
  this.isOpen = null;
  this.photos = args.photos || [];
}

Venue.prototype.isCurrentlyOpen = function (timeframes) {
  var currentHours, isOpen;
  var currentDate = new Date();

  var currentDay = currentDate.getDay() || 7;
  var currentTimeString = (currentDate.getHours().toString() + currentDate.getMinutes().toString());

  timeframes.forEach(function (timeframe) {
    if (timeframe.days.includes(currentDay)) {
      currentHours = timeframe.open;
    }
  });

  if (typeof currentHours === 'undefined') {
    return false;
  } else {
    return isWithinOpeningHours(currentTimeString, currentHours);
  }

};

function isWithinOpeningHours(currentTimeString, currentHours) {
  var isOpenNow = false;

  currentHours.forEach(function (openingHours) {
    if (openingHours.end.match(/\+\d{4}/)) {
      openingHours.end = (parseInt(openingHours.end) + 2400).toString();
    }

    if (currentTimeString > openingHours.start && currentTimeString < openingHours.end) {
      isOpenNow = true;
    }
  });

  return isOpenNow;
}

module.exports = Venue;
