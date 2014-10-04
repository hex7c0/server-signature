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
// import
try {
    var signature = require('../index.min.js'); // require('server-signature')
    var app = require('express')();
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

app.use(signature({
    token: 'Minor'
}));
app.get('/', function(req, res) {

    res.send('ok');
    return;
});
// server-signature starting
app.listen(3000);
console.log('starting "hello world" on port 3000');
