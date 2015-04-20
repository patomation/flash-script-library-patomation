if (fl.getDocumentDOM().selection.length > 0)
{
var cur_selection = fl.getDocumentDOM().selection;
var mySelected = new Array();

for(var i in cur_selection)
{
mySelected.push(fl.getDocumentDOM().selection[i]);
}

//fl.getDocumentDOM().selectNone();
//fl.getDocumentDOM().selection = mySelected;

for(var i in mySelected)
{
var sel = mySelected[i];
var path = sel.libraryItem.name;
var pName = sel.name;
var mc_name = path.substr(path.lastIndexOf("/")+1);
if (mc_name != null)
{
fl.trace(path + "_" + pName);
fl.getDocumentDOM().selectNone();
fl.getDocumentDOM().selection = [sel];
//fl.trace(sel.name);
//fl.trace(fl.getDocumentDOM().selection.length);
var newMc = fl.getDocumentDOM().convertToSymbol("movie clip", path + "_" + pName, "top left");
fl.getDocumentDOM().selection[0].name = pName;

fl.getDocumentDOM().selection = mySelected;
}
}
} 