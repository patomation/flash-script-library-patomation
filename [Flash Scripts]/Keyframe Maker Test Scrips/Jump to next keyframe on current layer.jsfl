function main(){
	var TL=fl.getDocumentDOM().getTimeline();
	var frame=TL.layers[TL.currentLayer].frames[TL.currentFrame];
	TL.currentFrame=frame.startFrame+frame.duration;
}
main();