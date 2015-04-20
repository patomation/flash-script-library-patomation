function Sequencer()
{    
    var curComp = app.project.activeItem;
    if (!curComp || !(curComp instanceof CompItem))
    {
        alert("Please select a Composition.");
        return;
    }

    var offsetFrames = parseInt(prompt("Number of frames to offset", "1"));

    for (var layerId = 0; layerId < curComp.selectedLayers.length; layerId++) 
    {
        var layer = curComp.selectedLayers[layerId];
        
        layer.startTime = layerId * offsetFrames * curComp.frameDuration;
    }
}

Sequencer();