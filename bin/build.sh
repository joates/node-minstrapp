#!/bin/bash
echo -n "building.. "
(browserify assets/js/*.js | uglifyjs -mc > public/js/main.js)
(cat assets/css/*.css > public/css/styles.css)
(cp -Rfx assets/img/* public/img/; rm public/img/README.md)
echo "done"
