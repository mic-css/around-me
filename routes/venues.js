var express = require('express');
var router = express.Router();
var venueSearch = require('../controllers/venues');

router.get('/', venueSearch.getVenuesList);

module.exports = router;
