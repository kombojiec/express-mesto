const router = require('express').Router();
const path = require ('path');
const fs = require('fs').promises;
const User = require('../models/users')
const {createUser, getUsers, getUserById,
  updateUserInfo, updateUserAvatar} = require('../controllers/users');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me', updateUserInfo);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;