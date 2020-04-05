// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {       //returns the length of the input string
    // YOUR CODE BELOW HERE //
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {      //changes to lowercase all charcters
    // YOUR CODE BELOW HERE //
    
return string.toLowerCase(); // toLowerCase does NOT alter original string


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {      //changes to lower case all characters
    // YOUR CODE BELOW HERE //
return string.toUpperCase(); // toUpperCase does NOT alter original string


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {       //changes input string to dash-case
    // YOUR CODE BELOW HERE //
var dashstr = string.toLowerCase();
return dashstr.replace(/ /gi,'-'); //the gi is a required switch to indicate a global find and replace (not just the first)



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {     //tests if the input string start w input char
    // YOUR CODE BELOW HERE //
if (string[0].toUpperCase() == char.toUpperCase()){//convert both to upper case to compare
    return true;
}
else{
    return false;
}
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) { //tests if the input string ends w input char
    // YOUR CODE BELOW HERE //
if (string[string.length-1].toUpperCase() == char.toUpperCase()){//convert both to upper case to compare
    return true;
}
else{
    return false;
}
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {     //concatenates 2 strings
    // YOUR CODE BELOW HERE //

return stringOne+stringTwo; //+ concatenates strings

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {   //"joins multiple strings with no space"
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments); 

    return args.join('');   //concatenates the elements of an array with no space
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {  //returns the longest of 2 strings
    // YOUR CODE BELOW HERE //
if (stringOne.length > stringTwo.length){
    return stringOne;
}
else if (stringOne.length < stringTwo.length){
    return stringTwo;
}
else{
    return "Theyre the same length, pal";
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {  //returns both strings in alphabetical order
    // YOUR CODE BELOW HERE //

return stringTwo.localeCompare(stringOne);

/*nfty little method that returns 1 if stringOne > stringTwo
-1 if stringOne<stringTwo and ) if theyre equal
*/

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {     //returns both strings in inverse alphabetical
    // YOUR CODE BELOW HERE //

return stringOne.localeCompare(stringTwo);

/*nfty little method that returns 1 if stringOne > stringTwo
-1 if stringOne<stringTwo and ) if theyre equal
*/


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
