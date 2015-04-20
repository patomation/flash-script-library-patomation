var doc = fl.getDocumentDOM()
var rootmctimeline = doc.getTimeline()
var itemIndex = doc.library.findItemIndex("myMovieClip");
var theItem = doc.library.items[itemIndex];
rootmctimeline.addNewLayer("AS");
doc.addItem({x:0,y:0}, theItem);
rootmctimeline.setSelectedLayers(0);
var mcName = "newMC"
var newMc = doc.convertToSymbol("movie clip", mcName, "top left");
doc.enterEditMode("inPlace");
var totallayer = rootmctimeline.layers.length;
doc.width = 1200
doc.height = 668
pasteobj()
function pasteobj()
{
for ( var i =(totallayer-1); i >=0; i-- )
{

rootmctimeline.currentLayer = i
var totframes = rootmctimeline.layers[i].frames.length;

fl.getDocumentDOM().getTimeline().addNewLayer("AS"+i);
rootmctimeline.copyFrames(0,totframes)

var n = totframes
fl.getDocumentDOM().getTimeline().pasteFrames(0 ,totframes)

//
}
placeobj()
}
function placeobj()
{
for ( var i =(totallayer-1); i >=0; i-- )
{
var n = rootmctimeline.layers[i].frames.length;
for (j=0; j var _len= rootmctimeline.layers[i].frames[j].elements.length;

for(var k=0;k<=_len;k++)
{

var obj = rootmctimeline.layers[i].frames[j].elements[k]

if(fl.getDocumentDOM().getTimeline().layers[i].frames[j].elements[k]!=null)
{
fl.getDocumentDOM().getTimeline().layers[i].frames[j].elements[k].x=obj.x
fl.getDocumentDOM().getTimeline().layers[i].frames[j].elements[k].y=obj.y
}
//fl.trace(fl.getDocumentDOM().getTimeline().layers[i].frames[j].elements[k]+" "+obj.x)
}
}
rootmctimeline.deleteLayer(i);
}
addmctostage()
}



function addmctostage()
{
//
rootmctimeline.insertFrames(1,true,0)
rootmctimeline.convertToKeyframes(0,1)
rootmctimeline.currentLayer = 0
rootmctimeline.cutFrames(0,0)
rootmctimeline.addNewLayer("new layer");
//rootmctimeline.insertFrames(1,false,0)
//rootmctimeline.convertToKeyframes(0,1)
rootmctimeline.layers[0].frames[1].actionScript="stop();mc._height=100;mc._width=100";
} 