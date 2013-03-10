'use strict';

var express = require('express')
  , app = express()
  , path = require('path')

app.use(express.logger());
require('./routes/index')(app);

// generates bundle on the fly 
require('./routes/bundle')(app);
  
// we use a static file server to serve the original JavaScript files in order to show them in dev tools
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000);
console.log('Listening on http://localhost:3000');
