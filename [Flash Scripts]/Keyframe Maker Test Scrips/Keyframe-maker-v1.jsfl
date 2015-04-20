// Created Py Patman
// Make Movie Clip with Panel
if (fl.getDocumentDOM().selection.length > 0)
{
        mcName = prompt("MovieClip Name", "");
        if (mcName != null)
        {
                newMc = fl.getDocumentDOM().convertToSymbol("movie clip", mcName, "top left");
                fl.getDocumentDOM().selection[0].name = mcName;
        }
}

//Distribute
var doc = fl.getDocumentDOM();
var timeline = doc.getTimeline();


doc.distributeToLayers();

//Insert Keyframes
fl.getDocumentDOM().getTimeline().insertKeyframe(7 );
fl.getDocumentDOM().getTimeline().insertKeyframe(20 );
fl.getDocumentDOM().getTimeline().insertKeyframe(27 );