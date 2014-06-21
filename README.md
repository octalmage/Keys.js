Keys.js
=======

This node.js module allows you to send keystrokes. Curently supports Mac OS X, Windows support is in the works. 

Example: 

This code sends the space key to the active appliaction. 

```
var keys = require('keys');
keys.send("49"); //49 is the keycode for space. 
```

[![Stories in Ready](https://badge.waffle.io/octalmage/keys.js.png?label=ready&title=Ready)](https://waffle.io/octalmage/keys.js) [![Build Status](https://travis-ci.org/octalmage/Keys.js.svg?branch=master)](https://travis-ci.org/octalmage/Keys.js)
