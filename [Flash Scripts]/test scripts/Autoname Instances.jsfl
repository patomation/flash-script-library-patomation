// dom - the flash DOM
var dom = fl.getDocumentDOM();

// hash to keep store whether a base name will be used more than once
var usedNames = new Object();

// hash to keep count of how many times a base name has been used during autonaming
var renamedNames = new Object();

// total renamed instances count
var renameCount = 0;

// return true if instance requires rename
function requiresRename( instance ){
	if( (instance.instanceType == "symbol" && instance.symbolType=="movie clip") 
		||  instance.elementType == "text" ){
		return instance.name == "";
	}
	return false
}

// return true if name is used more than once
function hasMultipleInstancesOfName( name ){
	return usedNames[ name ] > 1;
}

// update a hash with names and usage count
// names as keys and usage count as value
function addToUsedCount( dict, name ){
	if(! dict[ name ] ){
		dict[ name ] = 1;
	} else {
		dict[ name ] ++;
	}	
}

// get base name for instance
function getBaseName( instance ){
	// use library item name if possible
	if( instance.instanceType == "symbol"){
		var s = cleanName(instance.libraryItem.name);
		// make first letter lowercase
		var s1 = s.substr(0,1).toLowerCase();
		var s2 = s.length == 1 ? "" : s.substr(1);
		return s1 + s2;
	} else {
		if( instance.elementType == "text" ) return "txt";
		return instance.elementType;
	}
}

// very basic string clean
function cleanName(name){
	var n =  name.split(" ").join("");
	// remove any path parts before name
	if( n.indexOf("/") != -1 ){
		n = n.substr(n.lastIndexOf("/")+1);
	}
	return n;
}

// iterate over selection and autoname instances  
if(!dom.selection.length){
	alert("Please select instances(s) to name");
} else {

	// first pass to check if any instances names require numbering
	for( var i = 0; i<dom.selection.length; i++){
	
		var instance = dom.selection[i];
	
		if( requiresRename(instance) ){
			var baseName = getBaseName( instance );
			addToUsedCount( usedNames, baseName );
		}
	}

	// second pass to rename instances (in reverse to respect selection added order)
	for( var i = dom.selection.length -1; i >= 0 ; i--){

		var instance = dom.selection[i];
	
		if( requiresRename( instance ) ){
			var baseName = getBaseName( instance );
		
			if( hasMultipleInstancesOfName( baseName ) ){
				addToUsedCount( renamedNames, baseName);
				baseName += "_" + renamedNames[ baseName ];
			}
		
			instance.name = baseName;
		
			renameCount ++;
		}
	}

	alert( ""+renameCount+" object(s) renamed");
}