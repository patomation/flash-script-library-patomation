var doc = fl.getDocumentDOM();

// doc.width = 640;
// doc.height = 480;
// doc.frameRate = 24;


var profileXML = doc.exportPublishProfileString('Default');


// remove html publishing and default naming
profileXML = profileXML.replace("<html>1</html>", "<html>0</html>");
profileXML = profileXML.replace("<defaultNames>1</defaultNames>", "<defaultNames>0</defaultNames>");
profileXML = profileXML.replace("<flashDefaultName>1</flashDefaultName>", "<flashDefaultName>0</flashDefaultName>");


//Change Image Quality    
profileXML = profileXML.replace("<Quality>80</Quality>", "<Quality>100</Quality>");
//Change Sound Quality
profileXML = profileXML.replace("<StreamFormat>4</StreamFormat>", "<StreamFormat>12</StreamFormat>");
profileXML = profileXML.replace("<StreamCompress>9</StreamCompress>", "<StreamCompress>17</StreamCompress>");
profileXML = profileXML.replace("<EventFormat>0</EventFormat>", "<EventFormat>0</EventFormat>");
profileXML = profileXML.replace("<EventCompress>7</EventCompress>", "<EventCompress>17</EventCompress>");

//Turn On EXE Profile
profileXML = profileXML.replace("<projectorWin>0</projectorWin>", "<projectorWin>1</projectorWin>");
profileXML = profileXML.replace("<projectorWinDefaultName>1</projectorWinDefaultName>", "<projectorWinDefaultName>0</projectorWinDefaultName>");



//Create EXE Profile With SWF Matching File Name

var findString = "<projectorWinFileName>";
var startIndex = profileXML.indexOf(findString) + findString.length;

findString = "</projectorWinFileName>";
var endIndex = profileXML.indexOf(findString);

var curName = profileXML.substring(startIndex, endIndex);

var pubPath = "./" + doc.name.replace(".fla","") + ".exe";
profileXML = profileXML.replace(curName, pubPath);


//Create Flash Profile With SWF Matching File Name
var findString = "<flashFileName>";
var startIndex = profileXML.indexOf(findString) + findString.length;

findString = "</flashFileName>";
var endIndex = profileXML.indexOf(findString);

var curName = profileXML.substring(startIndex, endIndex);

var pubPath = "./" + doc.name.replace(".fla","");
profileXML = profileXML.replace(curName, pubPath);




//fl.trace("Will publish to: " + pubPath + ".swf");







doc.importPublishProfileString(profileXML);

