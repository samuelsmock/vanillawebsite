/*
*
* STRING MANIPULATION:
*
*0. Strings can sometimes be treated with arithmetic operators, but obviously some 
*like * and / make no sense.
*
*1. Strings also have built in properties unique to them, that make them easier to 
*work with
*
*/

//1. With Operators//

/*
* You can use + and += on strings as you would expect. Comparison operators compare the
* alphabetic order of strings
*
*/
console.log('apple'<'pear'); // prints true

var str2 = "hi";

console.log(str2 += ', how are you?'); //prints hi, how are you?

//2. With Methods//

/*
*
* There are a ton of special methods for strings built into JavaScript.
* Most do not alter the original string, but rather return a value based on the input string
* Here are a select few:
*
* charAt() returns the character at a given index
* toUpperCase() returns string with all characters to upper case
* split() returns an array of substrings based on a spliting character
* join() returns a string from an array of strings joined, optionally with divider characters 
* substring() returns the string cut from one index to another
* concat() returns the concatenation of 2 strings
* includes() returns boolean based on whether string contains a given index
*
*/
var str3 = "hello world!";

console.log(str3.charAt(3)); // prints l

console.log(str3.toUpperCase()); //prints HELLO WORLD!

console.log(str3.split(' ')); //prints [ 'hello', 'world!' ]

var arr4 = str3.split(' '); //assigns the array ["hello", "world!"] to arr4

console.log(arr4.join('-')); // prints hello-world!

console.log(str3.substring(6, str3.length-1)); //prints world

console.log(str3.concat( 'its such a beautiful day')); //prints hello-world!

console.log(str3.includes('z'));    //prints false





