

//Delete
fl.getDocumentDOM().deleteSelection();


//Jump Forward
	var TL=fl.getDocumentDOM().getTimeline();
	var frame=TL.layers[TL.currentLayer].frames[TL.currentFrame];
	TL.currentFrame=frame.startFrame+frame.duration;

// Select All
fl.getDocumentDOM().selectAll();
