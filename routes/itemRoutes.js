const express = require('express');
const { getItems, getItemById } = require('../controllers/itemController');

const router = express.Router();

router.get('/', getItems);
router.get('/:itemId', getItemById);

module.exports = router;
