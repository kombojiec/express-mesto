const User = require('../models/users');

const createUser = (req, res) => {
  const {name, about, avatar} = req.body;
  User.create({name, about, avatar})
  .then(user => res.send({ data: user }))
  .catch(err => {
    if(err.name = "validationError"){
      res.status(404).send({"message":"Не корректные данные"})
    }else{
      res.status(500).send({"message":"Что-то пошло не так..."})
    }
  });
}

const getUsers = (req, res) => {
  const users = User.find()
  .then(content => res.send(content))
  .catch(() => res.status(404).send({"message":"Пользователи не найдены"}))
}

const getUserById = (req, res) => {
  const user = User.findById(req.params.id)
  .then(user => res.send(user))
  .catch(() => res.status(404).send({"message":"Пользователь не найден"}))
}

const updateUserInfo = (req, res) => {
  const {name, about, avatar} = req.body;
  const id = req.user._id;
  User.findByIdAndUpdate(id, {
    name,
    about,
    avatar,
  },
  {
    new: true,
    runValidators: true,
    upsert: true
  }
  )
  .then(user => res.send(user))
  .catch(err => {
    if(err.name = "validationError"){
      res.status(404).send({"message":"Не корректные данные"})
    }else{
      res.status(500).send({"message":"Что-то пошло не так..."})
    }
  });
}

const updateUserAvatar = (req, res) => {
  const {avatar} = req.body;
  const id = req.user._id;
  User.findByIdAndUpdate(id, {avatar},{
      new: true,
      runValidators: true,
      upsert: true
  })
  .then(user => res.send(user))
  .catch(err => {
    if(err.name = "validationError"){
      res.status(404).send({"message":"Не корректные данные"})
    }else{
      res.status(500).send({"message":"Что-то пошло не так..."})
    }
  });
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserInfo,
  updateUserAvatar
}
