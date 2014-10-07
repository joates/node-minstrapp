## /views

``` shell
  views
   │
   ├── layout.html
   ├── pages         //webpage content
   └── partials      //code snippets
```

EJS is a very easy-to-use templating solution, take a look at the [documentation](https://github.com/visionmedia/ejs#layouts).

The _content_ for your webpages goes into ```pages``` (this should NOT be a full HTML document, it gets included into ```layout.html``` in the same way that partials are included).

The ```partials``` sub-folder contains code that exists on _every_ webpage.

