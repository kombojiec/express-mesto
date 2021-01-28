const router = require('express').Router();
const path = require ('path');
const fs = require('fs').promises;
const Card = require('../models/cards')
const {createCard, getCards, removeCard,
  addLike, removeLike} = require('../controllers/cards');

router.post('/', createCard);
router.get('/', getCards);
router.delete('/:id', removeCard);
router.put('/:id/likes', addLike);
router.delete('/:id/likes', removeLike);

module.exports = router;