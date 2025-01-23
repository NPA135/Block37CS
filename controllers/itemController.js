const { Item } = require('../models');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getItemById = async (req, res) => {
  const { itemId } = req.params;
  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
