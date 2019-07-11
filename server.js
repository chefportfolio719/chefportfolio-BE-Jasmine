const express = require('express');
const helmet = require('helmet');

const chefRouter = require('./api/chef-router');

const server = express();

server.use(express.json());

server.use(helmet());

server.use('./api/chefs', chefRouter);

server.get('/', (req,res)=>{
  res.send(`
  <h1>This is the chef server</h1>
  <img src='https://gcs.thesouthafrican.com/2016/05/Ramsay2.jpg'>
  `)
})