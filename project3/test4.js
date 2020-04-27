
//when to use callback? 
function Test(a,callback){ 
  this.a = a;
  //callback() same as callback.call(this). When is this not same?
  callback.call(this);
}

Test.prototype.foo = function(b){
  this.b = b;
  console.log(b);
  
}; //need semicolon for execution. Does it matter to do ()? 

var t = new Test(10,function(){
  console.log("t");
  console.log("callback function")
});