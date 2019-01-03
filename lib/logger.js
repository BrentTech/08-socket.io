'use strict';

const events = require('./events.js');
const logger = module.exports = exports = {};

logger.err = (payload) => {
  if(payload) {
    throw new Error(payload);
  }
};

logger.save = (payload) => {
  if(payload) {
    console.log(`File Saved, ${payload}`);
  }
};

events.on('file-save', logger.save);
events.on('file-error', logger.err);

// const io = require('socket.io-client');
// const socket = io.connection('http://localhost:3000');

// socket.on('message', (payload) => {

// })