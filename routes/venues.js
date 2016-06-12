var express = require('express');
var router = express.Router();
var venueSearch = require('../controllers/venues');

router.get('/', venueSearch.getVenues);

module.exports = router;
