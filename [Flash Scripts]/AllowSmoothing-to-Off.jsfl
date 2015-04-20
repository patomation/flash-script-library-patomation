var library=fl.getDocumentDOM().library;
var items=library.items;
var items_length=items.length;
for( var i = 0; i < items_length; i++){
	var item=items[i];
	if(item.itemType=='bitmap'){
		item.allowSmoothing=false;
	}
}