'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const logger = module.exports = exports = {};

logger.err = (payload) => {
  if(payload) {
    console.error('Oh, no! Error!', payload);
  }
};

logger.save = (payload) => {
  if(payload) {
    console.log('It has been saved', payload);
  }
};

socket.on('save', logger.save);
socket.on('error', logger.err);
