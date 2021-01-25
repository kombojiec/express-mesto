const router = require('express').Router();
const {users} = require('../data/users.json');
const path = require ('path');
const fs = require('fs').promises;


router.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then(content => res.send(JSON.parse(content)))
  .catch(err => console.log(err))
})

router.get('/users/:id', (req, res) => {
  const users = [];
  fs.readFile(path.join(__dirname, '..','data', 'users.json'))
  .then(content => users.push(JSON.parse(content)))
  .then(() => {
    const result = [];
    users[0].forEach(user => {
    if(user._id === req.params.id){
      result.push(user);
    }
    });
    if(result.length){
      res.send(result);
    }else{
      res.status(404);
      res.send({ "message": "Нет пользователя с таким id" })
    }
  })
})

module.exports = router;