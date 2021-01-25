const router = require('express').Router();
const path = require ('path');
const fs = require('fs').promises;

router.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname, '..','data', 'cards.json'))
  .then(content => res.send(JSON.parse(content)))
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}));
})

module.exports = router;