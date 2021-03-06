'use strict';
/**
 * @file basic test
 * @module server-signature
 * @package server-signature
 * @subpackage test
 * @version 0.0.1
 * @author https://github.com/expressjs/serve-static
 * @license GPLv3
 */

/*
 * initialize module
 */
var signature = require('..');
var express = require('express');
var request = require('supertest');

/*
 * test module
 */
describe('basic', function() {

  it('should return standard signature', function(done) {

    var app = express();
    app.use(signature());
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Server',
      /^Nodejs\/[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2} \(/).expect(200, done);
  });
  it('should return Min signature', function(done) {

    var app = express();
    app.use(signature({
      token: 'Min'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Server',
      /^Nodejs\/[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2}$/).expect(200, done);
  });
  it('should return Minor signature', function(done) {

    var app = express();
    app.use(signature({
      token: 'Minor'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Server', /^Nodejs\/[0-9]{1,2}.[0-9]{1,2}$/)
    .expect(200, done);
  });
  it('should return Major signature', function(done) {

    var app = express();
    app.use(signature({
      token: 'Major'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Server', /^Nodejs\/[0-9]{1,2}$/).expect(200,
      done);
  });
  it('should return Prod signature', function(done) {

    var app = express();
    app.use(signature({
      token: 'Prod'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Server', /^Nodejs$/).expect(200, done);
  });
  it('should return ranamed signature', function(done) {

    var app = express();
    app.use(signature({
      signature: 'pippo'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Server',
      /^pippo\/[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2}/).expect(200, done);
  });
  it('should return different header', function(done) {

    var app = express();
    app.use(signature({
      signature: 'pippo',
      header: 'Test'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Test',
      /^pippo\/[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2}/).expect(200, done);
  });
  it('should return my string', function(done) {

    var app = express();
    app.use(signature({
      signature: 'pippo',
      header: 'Test',
      custom: 'hex7c0'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Test', /^hex7c0$/).expect(200, done);
  });
  it('should return my string with extra info', function(done) {

    var app = express();
    app.use(signature({
      signature: 'pippo',
      header: 'Test',
      custom: 'hex7c0',
      extra: 'ciao'
    }));
    app.get('/', function(req, res) {

      return res.status(200).end();
    });
    request(app).get('/').expect('Test', /^hex7c0 ciao$/).expect(200, done);
  });
});
