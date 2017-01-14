//connect to the madMen database
var db = connect('127.0.0.1:27017/madMen'),
    allMadMen = null;


//search for the document whose name property is: "Don Draper"
db.names.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Dick Whitman'){
    //remove the record that contains "Dick Whitman"
    db.names.remove({ "_id" : thisDoc._id });
  }; 
});

//set a reference to all documents in the database
allMadMen = db.names.find();

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
}