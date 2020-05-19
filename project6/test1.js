var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
console.log('a');
var async = require('async');

// Load the Mongoose schema for User, Photo, and SchemaInfo
var User = require('./schema/user.js');
var Photo = require('./schema/photo.js');
var SchemaInfo = require('./schema/schemaInfo.js');


// XXX - Your submission should work without this line. Comment out or delete this line for tests and before submission!
//var cs142models = require('./modelData/photoApp.js').cs142models;

var conn= mongoose.connect('mongodb://localhost/cs142project6', { useNewUrlParser: true, useUnifiedTopology: true });

//var db = mongoose.connection;
//db.on('error', console.error.bind("e"));
//db.once('open',function(){console.log("connect!!")})

var user_info=[]
console.log("build user data")
User.find({},function(err,info){
  if(err){
      console.log("err")
      response.status(500).send(JSON.stringify(err));
      return;
  }else{
    (()=>{for (let i=0;i<info.length;i++){
        console.log("user find info:",info[i])
        user_info.push({"_id":info[i]._id,
                        "user_id":info[i].user_id,
                        "first_name":info[i].first_name, 
                        "last_name":info[i].last_name})
        console.log("user info length in loop:",user_info.length)
    };console.log("in iife",user_info.length)})();
  }
})
console.log("user_info length:",user_info.length)
console.log("after user_info:",user_info)
console.log("********************")

var info=''
Photo.find({},function(err,info){
    if(err){
        console.log('err',err)
    }else{
    console.log('info.lenbgth',info.length)
    uids=[]
    for(let i=0;i<info.length;i++){
     console.log(i,info[i])
     uids.push({
        "_id":info[i]._id,
        "user_id":info[i].user_id,
        "file_name":info[i].file_name,
        "comments":info[i].comments,
     })
    }
    let u= '5ec06bab46a9ca3953fa5583'
    m=[]
    //x.user_id.toString()===u ? console.log("0"):console.log("0")
    let findU1=info.filter(x=> console.log("filter:",x.user_id.toString(),typeof(x.user_id)))
    for (let i=0;i<info.length;i++){
        console.log("testing:",info[i].user_id,typeof(info[i].user_id.toString()),"u:",u)
        //.toString()
        if(info[i].user_id.toString()===u){
            m.push(info[i])
        }
    }
    console.log("u len:",findU1.length)
    console.log("m len:",m.length)
    console.log("uids:",uids)
    //mongoose.disconnect()
    }
})

