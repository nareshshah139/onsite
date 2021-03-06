
/*!
 * Module dependencies.
 */

var path = require('path');
var rootPath = path.resolve(__dirname + '../..');

/**
 * Expose config
 */

module.exports = {
  development: {
    root: rootPath,
    db: 'mongodb://localhost/onsite',
    options: {keepAlive: 1,
              w: 1},
    plugin_api_url: 'http://localhost:9000'
  },
  test: {
    root: rootPath,
    db: 'mongodb://localhost/onsite',
    options: {keepAlive: 1,
              w: 1}
  },
  staging: {
    root: rootPath,
    db: 'mongodb://localhost/onsite',
    options: {keepAlive: 1,
              w: 1}
  },
  production: {
    root: rootPath,
    db: 'mongodb://localhost/onsite',
    options: {keepAlive: 1,
              w: 1}
  }
};
