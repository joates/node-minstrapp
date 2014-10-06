## node-minstrapp

_minimal application bootstrapper_

## getting started

```shell
npm install && npm start
```

<h2>MVC pattern <small>(model-view-controller)</small></h2>

* models go into ```/db```<br />it's LevelDB, take a look at the [documentation](https://github.com/rvagg/node-levelup#basic-usage), using it as an object store for simplicity, it stores data structures which will be passed into templates by your controllers.
* put view templates in ```/views```
* controllers are added to ```/routes```<br />these are Express/Connect middleware functions \<**route-name**\>.js

What you are getting here is _actually_ 3 blank slates, so that you can build out _your own_ app design.

I thought if i packaged it like this (with minimal concepts) then others can more easily learn this technique from the simplicity of the [code](https://github.com/joates/node-minstrapp).

## license

MIT

