//create the madMen database and connect to it
var db = connect('127.0.0.1:27017/madMen'),
    allMadMen = null;

//create the names collection and add one document to it
db.names.insert({'name' : 'Don Draper'});

//set a reference to all documents in the database
allMadMen = db.names.find();

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
};


