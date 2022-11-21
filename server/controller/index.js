let express = require('express');
let router = express.Router();

//controller for index page -> used to organize code
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  }