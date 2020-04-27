// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) { //takes in an in terger and returns that interger factorial
  if(n<0){      //edge case, n<0
    return null;    
  }
  if (n === 0){   //base case: arrive at the last interger
    return 1;
    
  }return n * factorial(n-1); //recursive call (n! = n*(n-1)!)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  
  if (array.length ===0) return 0;  // edge case: empty array given
  
  if (array.length === 1) return array[0];  //base case we arrive at the end of the array
  return array[0] + sum(array.slice(1));    //recursive call to an array with the first element sliced off
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) return true; //2 base cases for odd and even, one is sure to trigger if n is an interger
  if (n === 1) return false;
  
  
  if (n>0) return isEven(n-2);  //increment down for n>0
  if (n<0) return isEven (n+2); //up for n<0
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0) return 0; //edge case n=0 return 0
  
  //if n <0 count up, if n>0, count down
  return n>0 ?  n-1 + sumBelow(n-1) : n+1 + sumBelow(n+1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y) {  
  if (x === y) return [];   //return empty array if x=y
  
  if (x<y){                   
    //if x<y increment up from x ubtil the y-1 element
    if (x+1 === y) return [];
  
    return [x+1].concat(range(x+1,y));
  }
  //if x>y increment down to the y+1 element
  if (x>y){
    if (x-1 === y) return [];
  
    return [x-1].concat(range(x-1,y));
  }
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {    // takes a number and an exponent to bring it to 
  
  if (exp === 0) return 1;  //any number to the zeroth is 1
  
  // the mathematical form of positive and negative exponents is different. call Base*Base^exp-1
  //for positive exp, and 1/base*base^exp+1 for negative exponent
  
  // toFixed(5) rounds off the result of each call to avoid long 
  return ((exp > 0 ? base * exponent(base, exp-1).toFixed(5) : 1/base * exponent(base, exp +1).toFixed(5)));
  
};



// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

  if (n === 2 || n===1) return true;     //base case 2^0 = 1 or 2^1 = 2
  if (n < 2) return false;      // base case if a number is repeatedly divided by 2 and never === 2 it is not a power of 2
   
  return powerOfTwo(n/2); // power of 2 <=> multiplying by 2, so we divide by 2 to work backwards
  
};



// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  if (string.length === 0) return '';       //base case: string.length ===0
  
  return string[string.length-1] +  reverse(string.substring(0,string.length-1));    //recursive call: start on the last character and call
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  string = string.replace(' ','');    //get rid of any spaces first
  
  if(string.length ===0 ||string.length ===1) return true;      //base case even number of characters: string.length ===0/ odd string.length ===0
  if(string[0].toUpperCase() !== string[string.length -1].toUpperCase())  return false;     //test: if all characters moving in from the outside have been the same
                      
  return palindrome(string.substring(1,string.length-1));   //recursive take one character off the end and one from the beginning
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
  
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

var multiply = function(x, y) { 


  if (x === 0) return 0;  
   
  return (x>0 ? y + multiply(x-1, y) : -y + multiply(x+1,y)); 
};
 /*base case- when we get to y*0 we are done 
     if x is greater than zero, decrement, if x < 0 increment and adjust sign of y
     */




// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) { // recursive division
  
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  
  if(str1 === '' && str2 === '') return true;   // base case: string1 = string2 = ''
            
  if (str1[0] !== str2[0]) return false;          // if a chacter doesnt match, return false
            
  return compareStr(str1.substring(1,str1.length), str2.substring(1, str2.length));  //recursive call with both strings' first character removed

  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str){  //take in a string and return an array with each character as an element
  
  
  if (str === '') return [];      //once we have cycled through the whole string, return an empty array
  
  return [str[0]].concat(createArray(str.substring(1,str.length))); //recursive call adding first element  to the result of the recursive call
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  
  if( array.length === 0) return [];  //base case
  
  return reverseArr(array.slice(1)).concat(array[0]);   // recursive call
    
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {   // make an array with length and value
  
  if (length === 0) return [];  //stop adding when length =0
  
  return [value].concat(buildList(value, length-1));  //recursive call concatenated with Value as an array
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  if (array.length === 0) return 0;     //base case
    
  if (array[0] === value){                            // two different recursive calls based    
    return countOccurrence(array.slice(1),value) +1;  //on whether the element === vale
  }
    return countOccurrence(array.slice(1), value);  //recursive call
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  if (array.length === 0) return [];      //base case
  
  return [callback(array[0])].concat(rMap(array.slice(1), callback)); //recursive call appending the results of call back
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  
  if(n === 0 ) return 1; 
  
  return fibonacci(n-1) + fibonacci(n-2);
  
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {   //returns the value of the nth fibonacci sequence
    if(n < 0) return null;  //edge case negative
    if(n === 0 ) return 0;  //base case 1
    if(n === 1) return 1;     //base case 2
    
    return nthFibo(n-1) + nthFibo(n-2); //recursive call to find the nth value
  
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  
  if (input.length === 0 ) return [];   //base case
  
  
  //Concatenates the entire word made into upper case
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if (array.length === 0){return [];} //base case: stop iteration when array.length < 1;  
    
    //return just first letter concatentated with the rest of the word 
    return [array[0][0].toUpperCase().concat(array[0].substring(1))].concat(capitalizeFirst(array.slice(1)));  //recursive call:
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},          
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj ={}) {    //returns an object containing a count of each letter
  
  if (str.length === 0){  //base case return obj (which is an empty object)
    return obj;
  }
  
  if(obj.hasOwnProperty(str[0])){     //if property already exists, increment its' count
    obj[str[0]]++; 
  }else{                          //IF PROPERTY DOES NOT exist initialize count
    obj[str[0]] = 1;
  }
  return letterTally(str.substring(1), obj);  // recursive call
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

var compress = function(list) {
  if (list.length === 0) return [];   //base case
  
  if (list[0] !== list[1]){           // if the element is not the same as the next one 
    return [list[0]].concat(compress(list.slice(1))); //add that element to the recursive call
  }
  return (compress(list.slice(1)));   //if it is a duplicate, just recursively call (throw the element out)
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
 if (array.length === 0) return [];   //base case
  
  if (array[0] === array[1] && array[0] === 0){           // if the element is not the same as the next one 
     //add that element to the recursive call
     return (minimizeZeroes(array.slice(1))); 
  }
  return [array[0]].concat(minimizeZeroes(array.slice(1)));  //if it is a duplicate, just recursively call (throw the element out)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]


var alternateSign = function(array) {   //returns the input array with alternating signs
  if (array.length === 0) return [];  //base case
  
  //return tyhe absolute value an neg absolute value in pairs of 2 starting with the first element
  return [Math.abs(array[0]), -1 * Math.abs(array[1])].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) { //takes a string and returns that string with numbers spelled out
    
if (str.length === 0) return '';  //base case

switch (str[0]){    //switch statement changing each number depending on its value
  case "0":
    return 'zero' + numToText(str.substring(1));
  case "1":
    return 'one' + numToText(str.substring(1));
 case "2":
    return 'two' + numToText(str.substring(1)); 
  case "3":
    return 'three' + numToText(str.substring(1)); 
  case "4":
    return 'four' + numToText(str.substring(1)); 
  case "5":
    return 'five' + numToText(str.substring(1));
  case "6":
    return 'six' + numToText(str.substring(1)); 
  case "7":
    return 'seven' + numToText(str.substring(1));
  case "8":
    return 'eight' + numToText(str.substring(1));
  case "9":
    return 'nine' + numToText(str.substring(1));
  default:
    return str[0] + numToText(str.substring(1));
  
}
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
