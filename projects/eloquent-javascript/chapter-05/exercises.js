// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {   //returns a non nested array with all original elments of a nested array
  
  
  return (arr.reduce((a,b) => a.concat(b)));  //.reduce method loops through the array performing concatenation at each element.
                                              //does not alter the input array
  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, codeBlock) {   // instead of defining our start, condition, and increments in the loop
    var i= start;                               //define our index i at starting value
    while(test(i)){                             //we pass them as HOFs
      codeBlock(i);
      i= update(i);                       //run update function
    }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {     //Checks every element of an array against a predicate
  if(arr.length === 0){         //defaults to true for empty arrays
      return true;
      }
  for (let i = 0; i < arr.length; i++){ //test each element with a loop
    if(!test(arr[i])){                  // test each element
      return false;
    }else if (i===arr.length-1 || arr.length === 0){  //return true only if we make it to the end of the array
         return true;
    }
  }
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
  
function dominantDirection(string) {
   let dirCount = countBy(string, char => {          // this is an array of objects. Each Object cooresponds to the number of characters with each direction
    let script = characterScript(char.codePointAt(0));  //Max number of objects in array is 3
    return script ? script.direction : "none";    //if a character is identified with a script, return script direction.  
  }).filter(({name}) => name != "none");        // remove any characters identified with no name

//example of dirCount might be: [{name:"ltr", count:3},{name:rtl, count 6}]
  
  if(dirCount.length === 1){return dirCount[0].name;}   //if there is only 1 direction, return that directions name
  else{
    return dirCount.reduce((a,b) => {return (a.count < b.count ? b.name :a.name)  });
  }

//last return statement reduces the array based on the count, returning the name
//in other words returns the object with the highest count.

  
}
//console.log(dominantDirection('Hello')); -> prints 'ltr'
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
