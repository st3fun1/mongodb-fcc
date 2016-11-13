var mongodb = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
mongodb.connect(url,function(e,db){
    if(e) throw e;
    var collection = db.collection("docs");
    var obj = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    };
    collection.insert(obj,function(e,data){
        if(e) throw e;
        console.log(JSON.stringify(obj));
        db.close();
    });
    
})