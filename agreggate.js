var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var size = process.argv[2];
var match = {
    $match:{
        size: size
    }
};
var group = {
    $group: {
        _id: "average", //arbitray string
        average: {
            $avg: "$price"
        }
    }
};
mongo.connect(url,function(e,db){
    if(e) throw e;
    var collection = db.collection("prices");
    collection.aggregate([match,group])
              .toArray(function(e,results){
                            if(e) throw e;
                            console.log(Number(results[0].average).toFixed(2));
                            db.close();
                });
});
