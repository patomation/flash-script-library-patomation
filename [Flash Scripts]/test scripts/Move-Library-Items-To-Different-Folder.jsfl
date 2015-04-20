var selectedItems = fl .getDocumentDOM().library.
getSelectedItems();
var folderExists = fl .getDocumentDOM().library.
itemExists( " Graphics " );
if (!folderExists) fl .getDocumentDOM().library.
newFolder( " Graphics " );
fl .getDocumentDOM().library.moveToFolder( " Graphics " );