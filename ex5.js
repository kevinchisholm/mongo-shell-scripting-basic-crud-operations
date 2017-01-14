//connect to the madMen database
var db = connect('127.0.0.1:27017/madMen'),
    i = 0,
    dbs = null;

//drop the database
db.dropDatabase();

//get a list all databases
dbs = db.adminCommand({listDatabases: 1});

//iterate over all databases
for (i in dbs.databases) {
    //print out the name of each database
    print(i + ' Database: ' + dbs.databases[i].name);
};

