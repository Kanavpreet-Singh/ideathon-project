const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use('/photos', express.static(path.join(__dirname, '../photos')));
  app.use(express.static('public'));
  app.use(express.static(path.join(__dirname, '../public')));
};
