//connect to the madMen database
var db = connect('127.0.0.1:27017/madMen'),
    allMadMen = null;

//add more documents to the names collection
db.names.insert({'name' : 'Peter Campbell'});
db.names.insert({'name' : 'Betty Draper'});
db.names.insert({'name' : 'Joan Harris'});

//set a reference to all documents in the database
allMadMen = db.names.find();

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
}