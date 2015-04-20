// JSFL
for each (var doc in fl.documents) {
    fl.trace("Saving and compacting \"" + doc.name + "\"...");
    var success = doc.saveAndCompact();
}