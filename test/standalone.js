'use strict';
/**
 * @file standalone test
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

/*
 * test module
 */
describe('standalone', function() {

  signature = signature({
    standalone: true
  });

  it('should return standard signature', function(done) {

    var t = signature();
    if (/^Nodejs\/[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2} \(/.test(t)) {
      done();
    }
  });
});
