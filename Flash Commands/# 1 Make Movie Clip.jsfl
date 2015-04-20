// Make MC
if (fl.getDocumentDOM().selection.length > 0)
{
        mcName = prompt("MovieClip Name", "");
        if (mcName != null)
        {
                newMc = fl.getDocumentDOM().convertToSymbol("movie clip", mcName, "top left");
//Disable this code below because it was updating the symbol "instance name" Which I dont want at the moment.
//                fl.getDocumentDOM().selection[0].name = mcName;
        }
}
// Distribute
var doc = fl.getDocumentDOM();
var timeline = doc.getTimeline();
doc.distributeToLayers();


