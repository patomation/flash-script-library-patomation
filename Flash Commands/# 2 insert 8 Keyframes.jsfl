//Insert Keyframes
fl.getDocumentDOM().getTimeline().insertKeyframe();
fl.getDocumentDOM().getTimeline().insertFrames(8);
fl.getDocumentDOM().getTimeline().insertKeyframe();

fl.getDocumentDOM().getTimeline().insertFrames(46);

fl.getDocumentDOM().getTimeline().insertKeyframe();
fl.getDocumentDOM().getTimeline().insertFrames(8);
fl.getDocumentDOM().getTimeline().insertKeyframe();

fl.getDocumentDOM().getTimeline().insertFrames(1);


//DELETE LAST FRAME 

fl.getDocumentDOM().getTimeline().convertToBlankKeyframes();


//Jump In Reverse 5 Keyframes and delete first part
function main(){
	var TL=fl.getDocumentDOM().getTimeline()
	var curL=TL.currentLayer;
	var curF=TL.currentFrame;
	var frame=TL.layers[curL].frames[curF];
	if(curF>frame.startFrame){
		TL.currentFrame=frame.startFrame;
	}else if(curF==frame.startFrame && curF>0){
		TL.currentFrame=frame.startFrame;
		var prevFrame=TL.layers[curL].frames[frame.startFrame-1];
		TL.currentFrame=frame.startFrame-(prevFrame.duration);
	}
}

main();
function main(){
	var TL=fl.getDocumentDOM().getTimeline()
	var curL=TL.currentLayer;
	var curF=TL.currentFrame;
	var frame=TL.layers[curL].frames[curF];
	if(curF>frame.startFrame){
		TL.currentFrame=frame.startFrame;
	}else if(curF==frame.startFrame && curF>0){
		TL.currentFrame=frame.startFrame;
		var prevFrame=TL.layers[curL].frames[frame.startFrame-1];
		TL.currentFrame=frame.startFrame-(prevFrame.duration);
	}
}

function main(){
	var TL=fl.getDocumentDOM().getTimeline()
	var curL=TL.currentLayer;
	var curF=TL.currentFrame;
	var frame=TL.layers[curL].frames[curF];
	if(curF>frame.startFrame){
		TL.currentFrame=frame.startFrame;
	}else if(curF==frame.startFrame && curF>0){
		TL.currentFrame=frame.startFrame;
		var prevFrame=TL.layers[curL].frames[frame.startFrame-1];
		TL.currentFrame=frame.startFrame-(prevFrame.duration);
	}
}

main();
function main(){
	var TL=fl.getDocumentDOM().getTimeline()
	var curL=TL.currentLayer;
	var curF=TL.currentFrame;
	var frame=TL.layers[curL].frames[curF];
	if(curF>frame.startFrame){
		TL.currentFrame=frame.startFrame;
	}else if(curF==frame.startFrame && curF>0){
		TL.currentFrame=frame.startFrame;
		var prevFrame=TL.layers[curL].frames[frame.startFrame-1];
		TL.currentFrame=frame.startFrame-(prevFrame.duration);
	}
}

main();
function main(){
	var TL=fl.getDocumentDOM().getTimeline()
	var curL=TL.currentLayer;
	var curF=TL.currentFrame;
	var frame=TL.layers[curL].frames[curF];
	if(curF>frame.startFrame){
		TL.currentFrame=frame.startFrame;
	}else if(curF==frame.startFrame && curF>0){
		TL.currentFrame=frame.startFrame;
		var prevFrame=TL.layers[curL].frames[frame.startFrame-1];
		TL.currentFrame=frame.startFrame-(prevFrame.duration);
	}
}

main();
function main(){
	var TL=fl.getDocumentDOM().getTimeline()
	var curL=TL.currentLayer;
	var curF=TL.currentFrame;
	var frame=TL.layers[curL].frames[curF];
	if(curF>frame.startFrame){
		TL.currentFrame=frame.startFrame;
	}else if(curF==frame.startFrame && curF>0){
		TL.currentFrame=frame.startFrame;
		var prevFrame=TL.layers[curL].frames[frame.startFrame-1];
		TL.currentFrame=frame.startFrame-(prevFrame.duration);
	}
}
main();
//Delete Part
fl.getDocumentDOM().deleteSelection();


//Jump Back

	var TL=fl.getDocumentDOM().getTimeline();
	var frame=TL.layers[TL.currentLayer].frames[TL.currentFrame];
	TL.currentFrame=frame.startFrame+frame.duration;

