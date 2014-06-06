Keys.js
=======

This node.js module allows you to send keystrokes. Curently supports Mac OS X and requires the node-applescript module. 

In the near future I will add Windows support and remove the node-applescript dependency. 

Example: 

This code sends the space key to the active appliaction. 

```
var keys = require('keys');
keys.send("49"); //49 is the keycode for space. 
```
