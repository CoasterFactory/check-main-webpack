
// index.js

var fs = require('fs'), p = require('path'), m = require('merge')

function c (u, d, r) {
  if (!u) {
    throw new Error('Empty parameter (url)')
  }
  if (!d) {
    d = '../'
  }
  if (!r) {
    r = 0
  }
  var f = 'webpack.config', e = '.js'
  if (r > 3) {
    throw new Error('No main webpack config detected! (url: '+u+')')
  }
  r += 1
  var _p = p.resolve(u, d, f+e)
  if (!fs.existsSync(_p)) {
    return c(u, '../'+d, r)
  }
  return d+f
}

module.exports = {
  c, p, m
}