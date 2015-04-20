//create an instance of library object
mylibrary = fl.getDocumentDOM().library;



//get items in library in an Array
itemArray = mylibrary.items;
totalCount = itemArray.length;





for(var i=0;i<totalCount;i++){
	myItem = itemArray[i];
	myItemType = myItem.itemType;
	myItemName = myItem.name;
	//fl.outputPanel.trace(myItemType +">>"+myItem);


var ext = myItemName.substr(myItemName.lastIndexOf("."));
		mylibrary.moveToFolder(ext == ".jpg" ? "Bitmaps", myItemName, true); 
	 
}