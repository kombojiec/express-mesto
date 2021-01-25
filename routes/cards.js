const router = require('express').Router();
const {users} = require('../data/cards.json');
const path = require ('path');
const fs = require('fs').promises;

router.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname, '..','data', 'cards.json'))
  .then(content => res.send(JSON.parse(content)))
  .catch(error => console.log(error));
})

module.exports = router;