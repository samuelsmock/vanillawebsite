// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */

function isArray(value) {    //we cannot use typeOf as arrays are a type of object
    // YOUR CODE BELOW HERE //
    
    return Array.isArray(value); //instead, use Array.isArray()
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {      //returns bollean testing if something is array or object
    // YOUR CODE BELOW HERE //  
    if (typeof value === 'object' && !(value instanceof Array) && value !== null && !(value instanceof Date)){
        return true;
    }else {
        return false;
    }
   //we use instance of to remove arrays and dates, and a simple inequality to remove null
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {  //tests if the object is complex and intended as 
                                // key/value collection    
    // YOUR CODE BELOW HERE //  
       if (typeof value === 'object' &&  value !== null && !(value instanceof Date)){
        return true;
    }else {
        return false;
    }
   //we use instance of to remove arrays and dates, and a simple inequality to remove null
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {            //returns a string that describes the 
                                    //variables type (including different instances
                                    //of the object type)
    // YOUR CODE BELOW HERE //
        let string ='';
        if (typeof value === 'object'){
            if(value instanceof Date){
                string = 'date';
            }else if (value instanceof Array){
                string = 'array'
            }else if(value === null){
                string = 'null';
            }else{
                string = 'object'
            }
        }else{
            string = typeof value;
        }
            
        
        return string;
    
    
    
    // YOUR CODE ABOVE HERE //
}
///console.log(typeOf(null)); =>returns 'null'

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
