const express = require("express");
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useCreateIndex:true,
useNewUrlParser: true,
useUnifiedTopology: true}).then(()=> {
console.log('Database Successfully Connected')},error =>{
console.log(error)});

// Primeira rota
app.get('/', (req, res) =>{
  res.send("Hello Vitor")
});

app.listen(3001);