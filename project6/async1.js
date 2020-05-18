
var async = require('async');


function foo(x,callback){
    //db access
    callback(null)
}
//import { forEachOf } from "async"
arr=[1,2,3]

//arr.then(a=>(a[1]=a[1]+2)).then(x=>console.log(x))

async function foo(arr){
    
    let f = await function(){arr[1] = arr[1]+2;console.log(arr)}
    
}
console.log(arr)
foo(arr)
console.log(arr)
(async ()=>{
    console.log("aa")
    let f = await function(){arr[1] = arr[1]+2;console.log(arr)}
    
})();

//async.each(arr,function(x,callback){
//  console.log("x",x)
//  //callback(x)
//},function(err){
//    console.log('error')
//})
    