'use strict';

const events = require('./lib/events.js');
const files = require('./lib/files.js');
const logger = require('./lib/logger.js');

let file = process.argv.slice(2).shift();
if (file) {
  files.alterFile(file);
}

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');

// exicute alterfile

