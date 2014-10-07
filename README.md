## node-minstrapp

_minimal application bootstrapper_

## getting started

```shell
npm install && npm start
```

## EJS modification

**Important:**<br />I am using a modified version of the EJS module from [npm](https://www.npmjs.org/package/ejs)

_patch to enable EJS dynamic includes_
* comment on [stackoverflow](http://stackoverflow.com/a/24492791)
* github [pull-request](https://github.com/visionmedia/ejs/pull/156) (_not merged_)

<h2>MVC pattern <small>(model-view-controller)</small></h2>

* models go into ```/db```<br />it's LevelDB, take a look at the [documentation](https://github.com/rvagg/node-levelup#basic-usage), using it as an object store for simplicity, it stores data structures which will be passed into templates by your controllers.
* put view templates in ```/views```
* controllers are added to ```/routes```<br />these are Express/Connect middleware functions \<**route-name**\>.js

What you are getting here is _actually_ 3 blank slates, so that you can build out _your own_ app design.

I thought if i packaged it like this (with minimal concepts) then others can more easily learn this technique from the simplicity of the [code](https://github.com/joates/node-minstrapp).

## tree

```shell
  minstrapp
   │
   ├── LICENSE
   ├── README.md
   ├── assets
   │   ├── README.md
   │   ├── css
   │   │   ├── README.md
   │   │   └── custom.css
   │   ├── img
   │   │   ├── 01.jpg
   │   │   └── README.md
   │   └── js
   │       ├── README.md
   │       └── custom.js
   ├── bin
   │   ├── build.sh
   │   └── clean.sh
   ├── db
   │   └── demo
   │       ├── 000005.ldb
   │       ├── 000008.ldb
   │       ├── 000009.log
   │       ├── CURRENT
   │       ├── LOCK
   │       ├── LOG
   │       ├── LOG.old
   │       └── MANIFEST-000007
   ├── index.js
   ├── package.json
   ├── public
   │   ├── css
   │   │   └── styles.css
   │   ├── favicon.ico
   │   ├── img
   │   │   └── 01.jpg
   │   └── js
   │       └── main.js
   ├── routes
   │   └── home.js
   └── views
       └── layout.html
```

## license

MIT

