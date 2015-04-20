/*
	Convert Bitmaps to Symbols extension
	
	Version: 1.0.0
	
	Created by:
		Ben Clinkinbeard
		ben.clinkinbeard@gmail.com
		http://www.returnundefined.com
		
		and
		
		Mike Weiner
		mike.weiner@wearebent.com
		http://www.wearebent.com
		
	Features:
		Allows you to convert selected bitmaps from your library to a symbol type of your choice.
		Other features include: slicing leading/trailing characters of the symbol names, 
		adding a prefix and/or suffix to the symbol names, adding the symbols to a folder, and setting the registration point of the symbols.
	
	This is released under a Creative Commons license. More information can be found here: http://creativecommons.org/licenses/by/2.5/
*/

// initializations
var obj_doc = fl.getDocumentDOM();
var obj_lib = obj_doc.library;
var arr_newSymbols = new Array();

// check if symbols were selected
if(obj_lib.getSelectedItems().length == 0)
{
	alert("You must select at least one bitmap to run this command!");
}
else
{
	// call XUL interface
	var obj_settings = flash.getDocumentDOM().xmlPanel(fl.configURI + "Commands/Convert Bitmaps to Symbols.xml");
	
	// make sure the user hit accept and not cancel
	if(obj_settings.dismiss == "accept")
	{
		// create a folder in the library if a folder name was entered
		if(obj_settings.str_folderName.length > 0)
		{
			fl.getDocumentDOM().library.newFolder(obj_settings.str_folderName);
		}
		
		for(var i = 0; i < obj_lib.getSelectedItems().length; i++)
		{
			var str_libName = fl.getDocumentDOM().library.getSelectedItems()[i].name;
			arr_newSymbols.push(str_libName);
		}
		
		for(var j = 0; j < arr_newSymbols.length; j++)
		{
			var str_symbolName = arr_newSymbols[j];
			var str_originalSymbolName = str_symbolName;
		
			// parse the symbol name and strip leading/trailing characters
			str_symbolName = str_symbolName.substr(str_symbolName.indexOf("/") + 1);
			str_symbolName = str_symbolName.substr(0, str_symbolName.length - obj_settings.int_stripTrailing);
			str_symbolName = str_symbolName.substr(obj_settings.int_stripLeading, str_symbolName.length - obj_settings.int_stripLeading);
			str_symbolName = obj_settings.str_symbolPrefix + str_symbolName + obj_settings.str_symbolSuffix;
				
			// verify a symbol with that name doesn't already exsist
			if(!obj_lib.itemExists(str_symbolName))
			{
				var str_behavior;
				
				// get the behavior
				if(obj_settings.str_behavior == "Movie Clip")
				{
					str_behavior = "movieclip";
				}
				else if(obj_settings.str_behavior == "Button")
				{
					str_behavior = "button";
				}
				else
				{
					str_behavior = "graphic";
				}
				
				// add the new symbol to the library
				obj_lib.addNewItem(str_behavior, str_symbolName);
				
				// modify the new mc's linkage info
				obj_lib.selectItem(str_symbolName);
				obj_lib.setItemProperty("linkageExportForAS", true);
				obj_lib.setItemProperty("linkageExportInFirstFrame", true);
				obj_lib.setItemProperty("linkageIdentifier", str_symbolName);
		
				obj_lib.editItem(str_symbolName);
				obj_lib.addItemToDocument({x:0, y:0}, str_originalSymbolName);
				obj_lib.moveToFolder(obj_settings.str_folderName, str_symbolName, false);
				
				obj_tl = obj_doc.getTimeline();
				var obj_ele = obj_tl.layers[0].frames[0].elements[0];
				
				var int_x = obj_ele.left;
				var int_y = obj_ele.top;
				var int_width = obj_ele.width;
				var int_height = obj_ele.height;
				var obj_matrix = obj_ele.matrix;
				
				// alter registration point
				switch(obj_settings.str_registration)
				{
					case "Top Left":
						obj_matrix.tx = 0;
						obj_matrix.ty = 0;
						break;
					case "Top Center":
						obj_matrix.tx = -(int_width / 2);
						obj_matrix.ty = 0;
						break;
					case "Top Right":
						obj_matrix.tx = -int_width;
						obj_matrix.ty = 0;
						break;
					case "Center Left":
						obj_matrix.tx = 0;
						obj_matrix.ty = -(int_height / 2);
						break;
					case "Center":
						obj_matrix.tx = -(int_width / 2);
						obj_matrix.ty = -(int_height / 2);
						break;
					case "Center Right":
						obj_matrix.tx = -int_width;
						obj_matrix.ty = -(int_height / 2);
						break;
					case "Bottom Left":
						obj_matrix.tx = 0;
						obj_matrix.ty = -int_height;
						break;
					case "Bottom Center":
						obj_matrix.tx = -(int_width / 2);
						obj_matrix.ty = -int_height;
						break;
					case "Bottom Right":
						obj_matrix.tx = -int_width;
						obj_matrix.ty = -int_height;
						break;
				}
				
				obj_ele.matrix = obj_matrix;
		
				obj_doc.exitEditMode();
			}
		}
	}
}