const express = require('express');
const { getReviews, addReview } = require('../controllers/reviewController');

const router = express.Router();

router.get('/', getReviews);
router.post('/:itemId', addReview);

module.exports = router;
