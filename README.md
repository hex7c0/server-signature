# [server-signature](http://supergiovane.tk/#/server-signature)

[![NPM version](https://badge.fury.io/js/server-signature.svg)](http://badge.fury.io/js/server-signature)
[![Build Status](https://travis-ci.org/hex7c0/server-signature.svg?branch=master)](https://travis-ci.org/hex7c0/server-signature)
[![Dependency Status](https://david-dm.org/hex7c0/server-signature/status.svg)](https://david-dm.org/hex7c0/server-signature)

Controls whether Server response header field which is sent back to clients includes a description of the generic OS-type of the server.
Similar to Apache2.

## Installation

Install through NPM

```bash
npm install server-signature
```
or
```bash
git clone git://github.com/hex7c0/server-signature.git
```

## API

inside expressjs project
```js
var signature = require('server-signature');
var app = require('express')();

app.use(signature());
```

### signature(options)

#### options

 - `header`- **String** Header filed *(default "Server")*
 - `signature`- **String** ProductOnly of standard string *(default "Nodejs")*
 - `token`- **String** Type of directive, related to http://httpd.apache.org/docs/2.2/mod/core.html#servertokens *(default "Full")*
 - `custom`- **String** Rewrite standard string with this *(default "disabled")*
 - `extra` - **String** Write Extra information after standard or custom string *(default "disabled")*
 - `standalone` - **Boolean** Return function that returns server-signature *(default "false")*

## Examples

Take a look at my [examples](https://github.com/hex7c0/server-signature/tree/master/examples)

Full string
```bash
Server: Nodejs/0.10.30 (Darwin)
```

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
