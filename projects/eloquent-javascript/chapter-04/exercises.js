////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start, end, step) {            //creates an array between start and end parameters
    // YOUR CODE GOES BELOW HERE //
    var array = [];
    var stepVal = (step === undefined ? 1:step);
    
    
    if (((end-start)*(step===undefined ? 1 : step)) <=0){ //returns empty array if step is 0 or step the opposit sign of end-start
      
      return [];                                       //and that step is moving in the right direction
      
    }else if (start<end){                          //creates ascending array if start<finish
        for(let i = start; i <= end; i++){
          if ((start-i)%stepVal === 0){         //checks to make sure the index is in the step
          array.push(i);
          }
    }
    }else if(end<start){                    //creates a descending array if start>finish
        for(let i = start; i >= end; i-- ){
          if((start-i)%stepVal === 0){
            array.push(i);
          }
    }
    
                       
    
    // YOUR CODE GOES ABOVE HERE //
    }
return array;    //returns populated array
  
}
// console.log(range(1,5,-1)); -> prints []
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {               //returns the sum of all elements in an array
  var sum =0;
  for (let i = 0 ; i<array.length; i++){  //loops through array adding each element
     sum += array[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {  //takes in an array, and returns the array in reverse
  
  let revArr = [];
  for (let i =0; i<arr.length; i++){ //populates revArray with indexes inserted at the beginning
    revArr.unshift(arr[i]);
  }
return revArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {  //alters the input array, reversing the indexes
  
  let revArr = [];                  //a temporary holding place for the reverse array
  for (let i =0; i<arr.length; i++){
    revArr.unshift(arr[i]);         //populates reverse holding array
  }
  for (let j = 0; j <arr.length;j++){ //reassigns reverse values back to input array
    arr[j] = revArr[j];
  }

}

//let array= [1,2,3,4];
//reverseArrayInPlace(array);
//console.log(array);         -> [4,3,2,1]

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  
 var list ={value:arr[arr.length-1], rest:null}; // initialize the last (most nested)
                                                //object with null indicating it is the last element
 for (let i=arr.length-2; i >= 0; i--){       //loop backwards through the array-
    list = {value: arr[i], rest:list};        //at each index, that index is the top most
                                              //object and the rest of the list is nested within the rest property
  }
  

return list;            //return list
}

//console.log(arrayToList([1,2,3,4])); 
/*prints { value: 1,
  rest: { value: 2, rest: { value: 3, rest: [Object] } } }*/
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var arr =[];          // the array to be populated with list values
  for (let node=list; node ; node = node.rest){  //loops through list until the rest value
    arr.push(node.value);                       //is null (taking advantage of the falseyness of null
  }
  
 
  return arr;
} 

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {   //returns a new list with the value added at the 1st (0 index) element
  
  let localList= {};              // function does not alter input list, this is the altered list
  localList = {value:value, rest:list}; // adds new element at the top
  return localList;                 //returns localList
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {     //returns value of the nth value of a list
  var index = 0;            // we will separately keep track of the index, because there is not inate index value
  for (let node=list; node ; node = node.rest){ //loops through the list
    if (index===n){         // condition is true when we have reached the nth element
      return node.value;
    }
    index++;              // increment our index
  }
}
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function deepEqual(obj1, obj2) {    //compares two objects to check if every key value pair is identical
 
  if ((typeof obj1 === typeof obj2) && typeof obj1 !== 'object'){   // first get all primitive objects compared with ===
 
    return ((obj1 === obj2) ? true : false);    //this is how you test equivalence w primitive variables
 
  }else if(obj1 === null || obj2 === null){     // null values are objects but can be compared strictly
 
    return(obj1 === obj2 ? true : false);
 
 //below is the meat of our object comparisons////
 
  }else {                                     //the default is now objects as collections
  
    if (Object.keys(obj2).length === 0 && Object.keys(obj1).length === 0){    //first return true for empty objects
      return true;
    }
     
     let keyList2 = Object.keys(obj2);             //set a local variable equal to the array of keys in object 2 for clarity
     let i = 0;                         //as we loop through the objects we will assign an 'index' to each key in obj1 to compare to obj2
     
      for (var key in obj1){                  // loop through obj1. at each key, we will check if BOTH KEY AND THE VALUE are the same in obj2
        if (!deepEqual(obj1[key], obj2[key]) || key !== keyList2[i]){  // a single instance of key or values not aligning returns false and breaks the loop
          return false;                     
        }else if (key === keyList2[keyList2.length-1]){
          return true;                        // only returns true if the loop makes it to the last key- keyList2[keyList.length-1]
        }
        i++;
      }
  }  
  
}


console.log(deepEqual({},{}));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
