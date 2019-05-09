'use strict';

let client = require('mongodb').MongoClient;
let bcrypt = require('bcrypt');

let dbname = 'nodemongotodo';
let url = 'mongodb://localhost:27017/' + dbname;

//establishing the connection
client.connect(url, { useNewUrlParser: true }, (error, dbh) => {
    if (error) {
        throw error;
    }
    let saltRounds = 10;
    let myPlaintextPassword = 'test';
    bcrypt.hash(myPlaintextPassword, saltRounds, (bcerr, hash) => {
        if (bcerr)
            throw bcerr;
        var data = { userid: "nml", email: "nml@acm.org", pwd: hash }

        dbh.db().collection("todoer").insertOne(data, (dberr, collection) => {
            if (dberr)
                throw dberr;
            console.log("Todoer inserted successfully");
            dbh.close();
        });
    });
});
