'use strict';

var browserify = require('browserify')
  , path = require('path')
  , jsroot = path.join(__dirname, '..', 'public', 'js');

module.exports = function (app) {
  var bundlePath = '/js/bundle.js';
  app.get(bundlePath, function (req, res) {

    browserify()
      .require(path.join(jsroot, 'main.js'), { entry: true })

      .bundle({ debug: true }, function (err, src) {
        if (err) return console.error(err);

        // the bundle doesn't actually exist, we generate it every time it is requested
        // when in production we'd cache it, but for development showing latest changes is what we want
        res.set('Content-Type', 'application/javascript');
        res.send(200, src);
      });
  });
};
