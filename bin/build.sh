#!/bin/bash
echo -n "building.. "
(browserify assets/scripts/*.js | uglifyjs -mc > public/js/main.js)
(cat assets/styles/*.css > public/css/styles.css)
echo "done"
