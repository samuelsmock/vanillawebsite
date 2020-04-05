/*
*
* STRING MANIPULATION:
*
*0. Strings can sometimes be treated with arithmetic operators, but obviously some 
*like * and / make no sense.
*
*1. Strings also have built in methods unique to them, that make them easier to 
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
* There are a ton of special methods with strings built into JavaScript.
* Here are a select few:
* charAt() returns the character at a given index
* toLowerCase() converts all characters to lower
* substring() cuts the string from one index to another
* length() returns the length of a string
* concat() concatenates 2 strings
* join() joins multiple strings optionally with divider characters
*
*/
var str3 = "hello world!";
console.log(str3.substring(6, str3.length-1)); //prints world
console.log(str3.charAt(3)); // prints l


