const Card = require('../models/cards')

const createCard = (req, res) => {
  const {name, link} = req.body
  Card.create({
    name,
    link,
    owner: req.user._id,
  })
  .then(card => res.send(card))
  .catch(err => {
    if(err.name = "validationError"){
      res.status(404).send({"message":"Не корректные данные"})
    }else{
      res.status(500).send({"message":"Что-то пошло не так..."})
    }
  });
}

const getCards = (req, res) => {
  const cards = Card.find()
  .then(cards => res.send(cards))
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}))
}

const removeCard = (req, res) => {
  Card.findOneAndRemove(req.params.id)
  .then(card => res.send(card))
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}))
}

const addLike = (req, res) => {
  const {id} = req.params;
  const userId = req.user._id;
  Card.findByIdAndUpdate(id,
    { $addToSet: {likes: userId}},
    { new: true },
  )
  .then(card => res.send(card))
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}))
}

const removeLike = (req, res) => {
  const {id} = req.params;
  const userId = req.user._id;
  Card.findByIdAndUpdate(id,
    { $pull: {likes: userId}},
    { new: true },
  )
  .then(card => res.send(card))
  .catch(() => res.status(500).send({"message":"Сервер не отвечает"}))
}

module.exports = {
  createCard,
  getCards,
  removeCard,
  addLike,
  removeLike
}