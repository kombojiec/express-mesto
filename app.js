const express = require('express');
const path = require ('path');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const bodyParser = require('body-parser');
const {PORT = 3000} = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('*', (req, res) => {
  res.status(404).send({"message": `Page with path ${req.originalUrl} not found`})
})

app.listen(PORT, ()=>{
  console.log(`server listening port ${PORT}`);
})