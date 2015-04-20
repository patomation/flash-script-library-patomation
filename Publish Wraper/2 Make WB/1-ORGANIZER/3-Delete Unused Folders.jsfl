

    function remove_empty_folders(doc){
      for( var i = 0; i < doc.library.items.length; i++){
        var item=doc.library.items[i];
        var item_name=item.name;
        var item_name_length=item_name.length;
       
        if(item.itemType=="folder"){
          var count_children=0;
          for( var j = i+1; j < doc.library.items.length; j++){
           
            var subitem=doc.library.items[j];
            if(subitem.name.substring(0,item_name_length)==item_name){
              count_children++;
              break;
            }
          }
         
          if(count_children==0){
            fl.trace('remove '+item.name);
            doc.library.deleteItem(item.name);
            i=-1;
          }
         
        }
      }
    }
     
    remove_empty_folders(fl.getDocumentDOM());

