var doc = fl.getDocumentDOM();

// doc.width = 640;
// doc.height = 480;
// doc.frameRate = 24;


var profileXML = doc.exportPublishProfileString('Default');


// remove html publishing and default naming
profileXML = profileXML.replace("<html>1</html>", "<html>0</html>");
profileXML = profileXML.replace("<defaultNames>1</defaultNames>", "<defaultNames>0</defaultNames>");
profileXML = profileXML.replace("<flashDefaultName>1</flashDefaultName>", "<flashDefaultName>0</flashDefaultName>");

var findString = "<flashFileName>";
var startIndex = profileXML.indexOf(findString) + findString.length;

findString = "</flashFileName>";
var endIndex = profileXML.indexOf(findString);

var curName = profileXML.substring(startIndex, endIndex);

var pubPath = "../bin/" + doc.name;
profileXML = profileXML.replace(curName, pubPath);

fl.trace("Will publish to: " + pubPath + ".swf");

doc.importPublishProfileString(profileXML);

