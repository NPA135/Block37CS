const { Review } = require('../models');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addReview = async (req, res) => {
  const { itemId } = req.params;
  const { userId, text, rating } = req.body;
  try {
    const review = await Review.create({ userId, itemId, text, rating });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
