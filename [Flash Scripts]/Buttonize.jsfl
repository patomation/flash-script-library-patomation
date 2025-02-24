﻿if ( fl.getDocumentDOM().selection.length == 1 )
{
	if ( fl.getDocumentDOM().selection[0].elementType == "text" )
	{
		var textLeft = fl.getDocumentDOM().selection[0].x;
		var textTop = fl.getDocumentDOM().selection[0].y;
		var textRight = fl.getDocumentDOM().selection[0].x + fl.getDocumentDOM().selection[0].width;
		var textBottom = fl.getDocumentDOM().selection[0].y + fl.getDocumentDOM().selection[0].height;
		var textText = fl.getDocumentDOM().selection[0].getTextString();
		
		fl.getDocumentDOM().convertToSymbol('button', textText, 'top left');
		var lib = fl.getDocumentDOM().library;
		if (lib.getItemProperty('linkageImportForRS') == true) {
		lib.setItemProperty('linkageImportForRS', false);
		}
		else {
		lib.setItemProperty('linkageExportForAS', false);
		lib.setItemProperty('linkageExportForRS', false);
		}
		lib.setItemProperty('scalingGrid',  false);
		
		fl.getDocumentDOM().enterEditMode('inPlace');
		fl.getDocumentDOM().getTimeline().convertToKeyframes();
		fl.getDocumentDOM().getTimeline().convertToKeyframes();
		fl.getDocumentDOM().getTimeline().convertToKeyframes();
		fl.getDocumentDOM().addNewRectangle({left:textLeft, top:textTop, right:textRight, bottom:textBottom}, 0);
	}
}