// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
 
    return function(value){ //returns a function that returns true/false based 
        return value>base;  //on the arguments of the parent and child functions
    }
  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
       return function(value){ //returns a function that returns true/false based 
        return value<base;  //on the arguments of the parent and child functions
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/*
console.log(createLessThanFilter(2)(4)); => prints false because 4!<2
*/


/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
   
    return function(string){        //checks if a string starts with a given character,
                                    // regardeless of case
        if(string[0].toUpperCase() === startsWith.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }

    // YOUR CODE ABOVE HERE //
}
//console.log(createStartsWithFilter('a')('apple')); =>prints true

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {   //checks if a string ends with a given character,
                                    // regardeless of case
    // YOUR CODE BELOW HERE //
    return function(string){
        return string[string.length-1].toUpperCase() === endsWith.toUpperCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}
// console.log(createEndsWithFilter('r')('runner')); //=>returns true

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let modstrings =[];         //set up an array local to the function that can
                                // be modified in the for loop
    
    for (let j = 0; j<strings.length; j++){
        modstrings.push(modify(strings[j]));    //call the modify function passed as input
                                                //to the parent function
    }
    
    return modstrings;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    for (let i=0; i < strings.length; i++){ //tests all strings in an array against a test function
        if (!test(strings[i])){             //pass each string in the array to test
            return false; 
        }else if(i===strings.length-1){
            return true;                    //returns true when the loop gets to the end w/o failure
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}