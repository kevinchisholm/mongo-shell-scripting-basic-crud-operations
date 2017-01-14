//connect to the madMen database
var db = connect('127.0.0.1:27017/madMen'),
    allMadMen = null;


//search for the document whose name property is: "Don Draper"
db.names.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Don Draper'){
    //update the record that contains "Donald Draper" and change it to "Dick Whitman"
    db.names.update( { "_id" : thisDoc._id }, { "name": "Dick Whitman" } );
  }; 
});

//set a reference to all documents in the database
allMadMen = db.names.find();

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
}