'use strict';

let client = require('mongodb').MongoClient;
let dbname = 'nodemongotodo';
let url = 'mongodb://localhost:27017/' + dbname;

// make client connect to mongo service
client.connect(url, { useNewUrlParser: true }, function(err, dbh) {
    if (err)
        throw err;
    console.log(`Database ${dbname} created!`);
    console.log('dbh object points to the database : ' + dbh.db().databaseName);
    dbh.close();
});
