const router = require('express').Router();
const path = require ('path');
const fs = require('fs').promises;


router.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then(content => res.send(JSON.parse(content)))
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}))
})

router.get('/users/:id', (req, res) => {
  const users = [];
  fs.readFile(path.join(__dirname, '..','data', 'users.json'))
  .then(content => {
    const user = JSON.parse(content).find((user) => user._id === req.params.id)
    if(user){
      res.send(user);
    }else{
      res.status(404).send({ "message": "Нет пользователя с таким id" })
    }
  })
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}))
})

module.exports = router;