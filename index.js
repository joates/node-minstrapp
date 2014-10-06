#!/usr/bin/env node

var fs = require('fs')
  , http = require('http')
  , stack = require('stack')
  , route = require('tiny-route')
  , static = require('ecstatic')
  , level = require('level')
  , async = require('async')
  , port = process.env.PORT || 8000
  , app
  , db

// all errors redirect to the homepage
stack.errorHandler = function error(req, res, err) {
  res.statusCode = 302
  res.setHeader('Location', '/')
  res.end()
}

// belt-and-braces
process.on('uncaughtException', function(err) {
  console.error('Error at:', new Date)
  console.error(err.stack)
})

async.series([ checkFolder, createDb, initApp ], start)

function checkFolder(cb) {
  if (fs.existsSync('./db')) return cb()
  fs.mkdirSync('db', 0766, function(err) {
    if (err) return cb(err)
    cb()
  })
}

function createDb(cb) {
  var data = {
      created: new Date
    , bodyText: 'example text from database'
  }
  db = level('./db/demo', { valueEncoding: 'json' })
  db.put('demo', data, function (err) {
    if (err) return cb(err)
    cb()
  })
}

function initApp(cb) {
  app = stack(
      static({
          root: __dirname +'/public'
        , showDir: false
        , handleError: false 
      })

      // add custom routes here..
    , route('/', require('./routes/home')(db))
  )

  cb()
}

function start(err) {
  if (err) throw err

  http.createServer(app).listen(port, function() {
    console.log('[PID='+ process.pid +'] server started on port '+ port)
    console.log('(use Ctrl+c to stop the server)')
  })
}

