var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var minAge = parseInt(process.argv[2],10);
mongo.connect(url,function(e,db){
   if(e) throw e;
   db.collection("parrots").find({
       age:{$gt: minAge }},
       {
             name:1,
             _id:0,
             age: 1
        }
   ).toArray(function(e,docs){
       if(e) throw e;
       console.log(docs);
   });
   db.close();
});