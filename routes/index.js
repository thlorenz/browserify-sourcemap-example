'use strict';

module.exports = function (app) {
  app.get('/', function (req, res) {
    // don't need a view engine
   res.sendfile('views/index.html');
  });
};
