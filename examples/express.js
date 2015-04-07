'use strict';
/**
 * @file express example
 * @module server-signature
 * @package server-signature
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var signature = require('..'); // require('server-signature') instead
var app = require('express')();

app.use(signature({
  token: 'Minor' // Server:Nodejs/1.6
}));

app.get('/', function(req, res) {

  res.send('ok');
}).listen(3000);
console.log('starting "hello world" on port 3000');
