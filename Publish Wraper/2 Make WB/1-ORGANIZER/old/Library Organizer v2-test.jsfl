//create an instance of library object
mylibrary = fl.getDocumentDOM().library;
//create organization folders

fl.getDocumentDOM().library.newFolder("Bitmaps");
fl.getDocumentDOM().library.newFolder("Graphics");

//get items in library in an Array

itemArray = mylibrary.items;
totalCount = itemArray.length;


	mylibrary.moveToFolder("Bitmaps"); 
