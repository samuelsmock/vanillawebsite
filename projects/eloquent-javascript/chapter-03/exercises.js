
////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(arg1,arg2) {             //takes two arguments presumed to be numbers
  return (arg1 < arg2 ? arg1 : arg2);  //if arg1 === arg2, returns arg2 = arg1

}
// console.log(min(2,2)); -> prints 2
////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(arg) {                //tests if a number is even using recursion
  if (arg <= 1){                      // our base case is the itergers 0 and 1 
    return (arg === 0 ? true : false);  //once we have made it to 0 or 1 we return true for even false for odd 
  }else{
    return (isEven(arg-2));           // if the input is not 0 or 1, this will repeatedly
  }                                   //call or "loop" until we get to 0 or 1

}

//console.log(isEven(5)); -> returns false
////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {        //Takes a string and a single character string
  let count = 0;                        //initialize count to 0
  for (let i = 0; i<str.length; i++){   //loops through string adding 1 to count each time a match is found
    count += (str[i] === char ? 1: 0);
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(char) {
  return countChars(char,'B');    //calls the external function specifying "B" as the character

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};

