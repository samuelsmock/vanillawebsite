/* OPERATORS:
*
* 0. Built in operations in a scripting language that act on data variables.
*
*1. Classified by whether they alter the data they act on, what they return, and how many
*variables they take in.
*
*/

//1. Assignment Operators//

/* 
* These operators change (or establish) the values held within a variable. it is the only
* type that does this without returning a new variable.
*
*/

var num1 = 2;  //assigns this number value to num1
var num2 = num1// can also assign values in another variable

console.log(num2); //=>prints 2

//2. Arithmetic Operators//

/*
*
*Perform addition, subtraction, division, multiplication, modulus or exponent
* operations on numbers or number variables. Addition can also be used to concatentate 
*strings
*
*/

var num3 = 2;
var num4 = 4;

console.log(num3*num4); //prints 8
num3 *= 2;       //multiplies current value by 2 and reassigns it
console.log(num3);// prints 8
num4++; //increments variable by 1
console.log(num4); //prints 5
console.log('Hi,'+' how are you?'); //prints"Hi, how are you?"

//3. Comparison Operators //

/*
* these compare 2 values with inequalities, or equalities and return BOOLEAN values
* you can compare strictly- === (must be the same data type) or non-strictly - ==, where
* javascript will change datatypes in the background to check equality. the ! symbol
* will inverse the boolean logic on comparison operators. Inequality operators 
* can also be used to compare strings by alphabetical order.
*
*/

console.log(2>3); //returns false
console.log(2!==3); //returns true

console.log('apple'<'pear');  //returns true

console.log (2<=2); //returns true

//4. Logical Operators//

/*
* Combine multiple boolean expressions (or operators that return booleans) to 
* check for combined truth or falseness. the ! symbol will inverse the boolean
* value.
*
*/

console.log(true && false); //returns false
console.log(true || false); //returns true
console.log(!false); //prints true

//5 Unary Operators (! and typeof)//

/* 
*
* Unary operators only operate on one variable. the ! symbol inverses boolean truthy
* or falsiness. typeof() is an example of a unary operator and returns the datatype
* of a variable or value, however typeof considers all complex datatypes (including
* arrays, collection objects, dates and null) as objects
*
*/

console.log(typeof([1,2])); // prints object
console.log(typeof('hello')); //prints string

console.log(!''); //prints true, because an empty string is falsey

var num5 = 5;
console.log(-num5); // - is a unary operator, prints -5


// 6. Ternary Operators//

/*
*
* Ternary operators need 3 values, and in essence function as a shorthand for 
* conditional statements. the syntax is ((boolean cond) ? (if true) : (if false)).
*
*/

console.log ((2<3) ? 2 : 3); //prints 2 because (2<3) is true

var str='Hi';
console.log((typeof(str) === 'string') ? (str+', whats up?') : ('this aint a string'));
//prints 'Hi, whats up?'

