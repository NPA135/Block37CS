const { Comment } = require('../models');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addComment = async (req, res) => {
  const { reviewId } = req.params;
  const { userId, text } = req.body;
  try {
    const comment = await Comment.create({ userId, reviewId, text });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
