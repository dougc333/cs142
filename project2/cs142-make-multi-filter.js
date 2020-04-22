'use strict';


function cs142MakeMultiFilter(origArray){
    let currArray =  Array.from(origArray);
    function af(fn, callback){
      if(typeof(fn)!=='function'){
        return currArray;
      }
      currArray = currArray.filter(fn);
      
      if (typeof(callback)==='function'){
         callback.call(origArray,currArray);
      }
      return af;
    };
    return af;
}



/**
var arrayFilterer1 = cs142MakeMultiFilter([1,2,3]);

// call arrayFilterer1 (with callback function) to filter out all the numbers not equal to 2
console.log('test1');
arrayFilterer1(function (elem) {
  return elem !== 2; // check if element is not equal to 2
}, function (currentArray) {
  console.log("should print [1,2,3]:",this); // printing 'this' within the callback function should print originalArray which is [1,2,3]
  console.log('should print [1,3]:',currentArray); // prints [1, 3]
});


// call arrayFilterer1 (without callback function) to filter out all the elements not equal to 3
arrayFilterer1(function (elem) {
  return elem !== 3; // check if element is not equal to 3
});

console.log('test2');
// calling arrayFilterer1 with no filterCriteria should return the currentArray
var currentArray = arrayFilterer1();
console.log('should print [1]', currentArray);   // prints [1] since we filtered out 2 and 3

console.log('test3');
// Since arrayFilterer returns itself, calls can be chained
function filterTwos(elem) { return elem !== 2; }
function filterThrees(elem) { return elem !== 3; }
var arrayFilterer2 = cs142MakeMultiFilter([1,2,3]);
var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
console.log('should print [1]', currentArray2);   // prints [1] since we filtered out 2 and 3

console.log('test4');
// Multiple active filters at the same time
var arrayFilterer3 = cs142MakeMultiFilter([1,2,3]);
var arrayFilterer4 = cs142MakeMultiFilter([4,5,6]);
console.log(arrayFilterer3(filterTwos)());	// prints [1,3]
console.log(arrayFilterer4(filterThrees)());	// prints [4,5,6]
 */