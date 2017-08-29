var fs = require('fs')
var path = require('path')

function checkMainWebpack (url, dir, recur) {
  if (!url) {
    throw new Error('Empty parameter (url)')
  }

  if (!dir) {
    dir = '../'
  }

  if (!recur) {
    recur = 0
  }

  file = 'webpack.config'
  ext = '.js'

  if (recur > 3) {
    throw new Error('No main webpack config detected! (url: '+url+')')
  }

  recur += 1

  var _path = path.resolve(url, dir, file+ext)

  if (!fs.existsSync(_path)) {
    return checkMainWebpack(url, '../'+dir, recur)
  }

  return dir+file
}

module.exports = checkMainWebpack