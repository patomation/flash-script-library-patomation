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