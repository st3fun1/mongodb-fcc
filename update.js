var mongodb = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/" + process.argv[2];


mongodb.connect(url,function(e,db){
   var newAge = 40;
   if(e) throw e;
   var collection = db.collection("users");
   collection.update(
       {
            username: "tinatime"
        },
        {
            $set:{
                age: newAge
            }
        },function(e){
            if(e) throw(e);
            db.close();
        }
   );
});