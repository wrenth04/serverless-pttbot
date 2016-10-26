var firebase = require('firebase');
var async = require('async');
var moment = require('moment');
var request = require('request');
var config = require('./config');

var server = firebase.initializeApp({
  serviceAccount: config.SERVICE_ACCOUNT,
  databaseURL: config.DB_URI
}, 'server');

var root = server.database();

module.exports = (callback) => {
  callback();
}



