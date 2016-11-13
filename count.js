var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url,function(e,db){
   if(e) throw e;
   var collection = db.collection("parrots");
   collection.count({
      age: {
          $gt: +process.argv[2]
      } 
   },function(e,ct){
       if(e) throw e;
       console.log(ct);
       db.close();
   });
   
});