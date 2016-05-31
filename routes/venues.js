var express = require('express');
var router = express.Router();
var venueSearch = require('../controllers/venues');

/* GET venues listing. */
router.get('/', venueSearch.getVenuesList);

module.exports = router;
