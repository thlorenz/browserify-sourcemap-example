'use strict';

var express = require('express')
  , app = express()
  , path = require('path')

app.use(express.logger());
require('./routes/index')(app);

// generates bundle on the fly 
require('./routes/bundle')(app);
  
var server = app.listen(3000);
console.log('Listening on http://localhost:3000');
