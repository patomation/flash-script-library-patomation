//BITMAP IMPORTER

fl.openFileDialog();
fl.getDocumentDOM().selectAll();
fl.getDocumentDOM().clipCopy();
fl.getDocumentDOM().close(false);
fl.documents[0].clipPaste();




// Image Scale Alignment
//
// This command was recorded by Adobe Flash CS6.
//

// Move: {x:428.5, y:228.4}
fl.getDocumentDOM().moveSelectionBy({x:428.5, y:228.4});

// Scale: 0.34, 0.34
fl.getDocumentDOM().scaleSelection(0.34, 0.34);

// Select All
fl.getDocumentDOM().selectAll();

// Match Size: true, true, false
fl.getDocumentDOM().match(true, true, false);

// Align: left, false
fl.getDocumentDOM().align('left', false);

// Align: top, false
fl.getDocumentDOM().align('top', false);

// Distribute to Layers
fl.getDocumentDOM().distributeToLayers();

// Lock Layers: true
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

// Delete
fl.getDocumentDOM().deleteSelection();