'use strict';


const fs = require('fs');
const util = require('util');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const files = module.exports = exports = {};

files.loadFile = (file) => readFile(file);
files.saveFile = (file, buffer) => writeFile(file, buffer);

files.convertBuffer = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

files.alterFile = (file) =>
  files.loadFile(file)
    .then(contents => files.convertBuffer(contents))
    .then((buffer) => files.saveFile(file, buffer))
    .then(() => {
      socket.emit('file-save', file);
      return true;
    })
    .catch(error => socket.emit('file-error', error));

    
let file = process.argv.slice(2).shift();
if (file) {
  files.alterFile(file);
}