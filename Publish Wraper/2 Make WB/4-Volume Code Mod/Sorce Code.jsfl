// Source: http://www.actionscript.org/forums/showthread.php3?t=98017


var myIndex = fl.getDocumentDOM().library.findItemIndex("Service1");
	fl.getDocumentDOM().library.items[myIndex].timeline.layers[0].frames[0].actionScript = "stop();";