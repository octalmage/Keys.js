var exec = require('child_process').exec;

//console.log("keys");
var send = function(keycode) 
{
	if (process.platform=="darwin")
	{
		var applescript = 'tell application "System Events" to key code ' + keycode;
		var script = "osascript -e '" + applescript + "'";
		
	}
	else if (process.platform=="win32")
	{
		var script = "bin\\nircmdc.exe sendkey " + String.fromCharCode(keycode)  + " press";
	}
	//console.log(script);
	exec(script);

};

exports.send = send;