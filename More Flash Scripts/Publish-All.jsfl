function export_all(){
  var docs=fl.documents;
  var docs_length=docs.length;
  for (var i=0; i<docs_length; i++) {  
    var doc=docs[i];
    doc.publish();
  }
}
export_all();
