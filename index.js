'use strict';
/**
 * @file server-signature main
 * @module server-signature
 * @package server-signature
 * @subpackage main
 * @version 1.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * functions
 */
/**
 * starting point
 * 
 * @function wrapper
 * @param {Object} my - user cfg
 * @return {Function}
 */
function wrapper(my) {

    var output;
    if (my.custom) {
        output = String(my.custom);
    } else { // don't check Prod
        output = my.signature;
        var version = process.version.match(/[0-9]{1,2}/g);
        if (my.Major) {
            output += '/' + version[0];
            if (my.Minor) {
                output += '.' + version[1];
                if (my.Min) {
                    output += '.' + version[2];
                    if (my.OS) {
                        var os = require('os');
                        output += ' (' + os.type() + ')';
                    }
                }
            }
        }
    }
    if (my.extra) {
        output += ' ' + String(my.extra);
    }

    return function header(req, res, next) {

        var r = req.res || res;
        r.setHeader(my.header, output);
        if (next) {
            return next();
        }
        return;
    };
}

/**
 * option setting
 * 
 * @exports signature
 * @function signature
 * @param {Object} opt - various options. Check README.md
 * @return {Object}
 */
function signature(opt) {

    var options = opt || Object.create(null);
    var my = {
        header: String(options.header || 'Server'),
        signature: String(options.signature || 'Nodejs'),
        token: String(options.token || 'Full'),
        custom: options.custom,
        extra: options.extra
    };
    if (my.token == 'Full') {
        my.Prod = my.Major = my.Minor = my.Min = my.OS = true;
    } else if (my.token == 'OS') {
        my.Prod = my.Major = my.Minor = my.Min = my.OS = true;
    } else if (my.token == 'Min') {
        my.Prod = my.Major = my.Minor = my.Min = true;
    } else if (my.token == 'Minor') {
        my.Prod = my.Major = my.Minor = true;
    } else if (my.token == 'Major') {
        my.Prod = my.Major = true;
    } else if (my.token == 'Prod') {
        my.Prod = true;
    }
    return wrapper(my);
}
module.exports = signature;
