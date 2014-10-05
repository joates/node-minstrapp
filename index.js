#!/usr/bin/env node

var fs = require('fs')
  , http = require('http')
  , stack = require('stack')
  , route = require('tiny-route')
  , static = require('ecstatic')
  , level = require('level')
  , port = process.env.PORT || 8000

if (! fs.existsSync('./db')) {
  fs.mkdirSync('db', 0766, function(err) {
    if (err) throw err
  })
}

var db = level('./db/demo', { valueEncoding: 'json' })
db.put('demo', {created:Date.now(),bodyText:'example text from database'}, function (err) {
  if (err) throw err
  console.log('new db created OK')
})

stack.errorHandler = function error(req, res, err) {
  // all errors redirect to the homepage
  res.statusCode = 302
  res.setHeader('Location', '/')
  res.end()
}

var app = stack(
    route('/', require('./routes/root')(db))
  , static({ root: __dirname +'/public', handleError: false })
)

process.on('uncaughtException', function (err) {
  console.error('Error at:', new Date)
  console.error(err.stack)
})

http.createServer(app).listen(port, function() {
  console.log('[PID='+ process.pid +'] server started on port '+ port)
  console.log('(use Ctrl+c to stop the server)')
})

