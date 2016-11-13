var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/" + process.argv[2];

mongo.connect(url,function(e,db){
   if(e) throw e;
   var collection = db.collection(process.argv[3]);
   collection.remove({
       _id: process.argv[4]
   },function(e){
      if(e) throw e;
      db.close();
   });
});