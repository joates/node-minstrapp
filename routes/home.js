var fs = require('fs')
  , ejs = require('ejs')

module.exports = function(db) {
  return function (req, res, next) {
    req.resume()

    function error(e) {
      console.error(e)
      return next(e || e.msg || 'ERROR')
    }

    db.get('demo', function(err, obj) {
      if (err) return error(err)

      // db read OK..
      res.writeHead(200, {"Content-Type":"text/html"})
      var filePath = './views/layout.html'
      var template = fs.readFileSync(filePath, 'utf8')
      return res.end(ejs.render(template, obj))
    })
  }
}

