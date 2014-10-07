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
      var template = fs.readFileSync('./views/layout.html', 'utf8')
      obj.filename = 'layout'
      obj.mainContent = 'views/pages/home'
      return res.end(ejs.render(template, obj))
    })
  }
}

