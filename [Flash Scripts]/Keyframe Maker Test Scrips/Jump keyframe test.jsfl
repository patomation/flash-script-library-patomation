var tl = fl.getDocumentDOM().getTimeline(); 
var frameArray = tl.layers[0].frames; 
var n = frameArray.length; 
for (i=0; i<n; i++) {     
     if (i==frameArray[i].startFrame) {         
         if (tl.currentFrame < i) {             
             tl.setSelectedFrames(i, i+1);             
             break;         
          }     
     } 
}