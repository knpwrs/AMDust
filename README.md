#AMDust
##Overview
AMDust is a conversion of the [`dust`](http://akdubya.github.com/dustjs/) templating library to a series of two AMD modules (the compiler and the renderer). This design allows templates to be precompiled with AMD optimizers such as [`r.js`](https://github.com/jrburke/r.js/) and inlined to the final build, eliminating client-side compiling, reducing the total size of the code base, and reducing the total number of HTTP requests with little to no effort on your side and with no changes to your code.

##Usage
The two modules provided by AMDust are `dust` (the rendering library) and `dustc` (the compiling library). They can be used as follows:

    require(['dust', 'dustc!template.dust'], function (dust, template) {
      // `dust` is the standard dust rendering library and `template` is a string which contains the registered name of the compiled version of `template.dust`
      var context = {/* context variables */};
      dust.render(template, context, function (err, out) {
        // `out` contains the rendered template
      });
    });

As the comments in the code above state, `dust` is the standard dust rendering library and `template` is a string which contains the registered name of the compiled version of `template.dust`. From there you just use `dust` like you normally would. You can also supply your own name to register templates by using the following syntax for `dustc`: `dustc!name!template.dust`. This is useful for partials which must be registered under a certain name.

##Building
For an example of how to build an AMD project containing AMDust, see the [AMDust Build Example](https://github.com/KenPowers/AMDust-Build-Example).

##Testing
To run the tests, first clone this repository and initialize the submodules with `git submodule update --init`. From there you can serve up this directory in a web server. The following two methods are recommended:

Using [`nws`](https://github.com/KenPowers/nws):

    nws

Using Python:

    python -m SimpleHTTPServer

Now you can visit `http://localhost:port/test` and the tests will run in your browser.

##License
**The MIT License**

Copyright (c) 2012 Kenneth Powers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.