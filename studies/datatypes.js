/*
* DATATYPES:
*
* 0. Variables can take the form of various different types, each with unique methods 
* and properties. 
*
* 1. Oftentimes data types will need to match inorder to perform operations with 
* other variables. Javascript will sometimes 'coerce' or change a variables data type 
* in the background in order to make certain methods or statements work
*
* 2. Datatype is determined during initialization, it can not in a true sense be changed,
* but can be copied as a different type
*/

//1. Number //

/*
* All numbers in Javascript are 8-byte floating-point numbers. Datatype must be a number 
*if you are to perform arithmetic (but js will often convert in the background). Because
*there is only one type of number in JavaScript, you can also use scientific notation. 
*/
var num1 = 5; 
var num2 = 4e-2;
console.log(num1*num2); // =>prints 0.2

//2. String//

/* 
* This is how text information is stored. Strings must be surrounded either by
* double or single quotes - '' or "". Strings can be manipulated through methods unique to 
* this data type or through operators. 
*
*/
var string1 = 'Hi,'
var string2 = 'how are you?'
console.log(string1 + string2); // print "Hi, how are you?"

//3. Boolean//

/* this datatype uses the keywords true or false (all lowercase). the concepts of 
*"truthy" or "falsey" are used to coerce other datatypes to true or false in the
*background in JavaScript in instances such as if statements
*/
var yesorno = true;
var binary = 1;
if (yesorno){
    console.log("it's true!") //prints 'it's true!
}
if (binary){
    console.log("it's true!") //also prints 'it's true!
}

//4. Array//
/* Indexed list of elements. Elements can be any data type including other arrays
* (called nested arrays) as well as a mixture of data types. Declared with hard brackets
* and with elements separated by commas. Array elements are accessed with bracket notation
* and are zero-indexed, meaning the first element is called with index 0. Nested arrays
* are accessed with double bracket notation. Arrays are a subset of the Object data type.
*/

var array =['a', 5, [1,2], false];
console.log(array[0]); //prints a
console.log(array[2][1]);//prints 2

// 5. Objects. //

/*
* This is a collection of data stored in key/value pairs. An object is declared
* using curly brackets with key:values separated by commas. Objects values are 
* accessed using bracket notation with a quotes around the key name or with dot
* notation (without quotes on the key name). key/value pairs can be added the 
* same way.
*/
var object = {
    key1:"value1",
    key2: 2,
}
console.log(object["key1"]); //prints value1
console.log(object.key2); // prints 2
object.key3 = 'value3'
console.log(object.key3); //prints value3

//6. Function //

/* functions allow use to create blocks of code to call back to later without 
* typing the same thing out over and over. Declared using keyword function and 
* curly brackets. Functions can take inputs called arguements- these go inside
* the parenthesis in the function definition. The inputs to a function are the
* values passed to the arguments on a given call. Optional to have a return 
* statement, which will return a value to the external environment in which the
* function is later called
*/

function doStuff(arg1, arg2){ 
    console.log (arg1);      //prints the first argument
    console.log (arg1+arg2); //prints the sum of the arguments

    return (arg1*arg2);
}

var product = doStuff(2,3); //2 and the 3 are the inputs, returns the product 
                            // in addition will print 2 and 5
console.log(product);       //prints 6

//7. undefined//
/*
* a datatype that is the default for a non declared or non-initialized variable.
* "Undefined" is used to describe both the value and the type 
* (both the bucket and the bucket's contents, metaphorically speaking)
* NOT the same as null or NaN
*/
var uninitialized;
console.log(uninitialized); // prints undefined
console.log(typeof uninitialized); //also prints undefined

//8. null //
/*
* Null is the explicit (and defined) declaration of an absence of a value, and means the variable
* points nowhere. Unlike undefined, null is not a property of the value, but rather 
* an object that references nothing.
*/
var nullvar = null;
console.log(nullvar); // prints null
console.log(typeof nullvar) //prints object

//9. NaN //
/* stands for Not-A-Number, and is a global property of any datatype other than numbers.
* it is also the default return of math operators that produce imaginary numbers.
* compares not equal to everything using comparison operators, so you must use 
* isNaN() for determining if something has that property.
*/

function isNumber(arg){
    if (isNaN(arg)){
        console.log ("that ain't no number!");
    }
    else {
        console.log ('that sure is a number!');
    }
}
isNumber(1);    // prints that sure is anumber!
isNumber('a');  // prints that ain't no number!

console.log(Math.sqrt(-1)); // prints NaN

//10. Infinity and -Infinity//
/*
*Similar to NaN in that it is a global property, but this is assigned to objects
*that are numbers, but are infinite in a mathematical sense or exceed the limits 
*of an 8-byte floating point number. Mathematical rules regarding infinity hold
*/
var x = Math.pow(10,1000) //assigns infinity to x because the number is too big for 64 bit
console.log(1/x); //Prints 0
console.log(x+1); // Prints Infinity
console.log(-1*x); //prints -Infinity

//11. Primitive vs. Complex Datatypes//
/*
* two groups of datatypes based off of whether they hold the a single value corresponding
* to a single 8 byte chunk of info, or if they are a reference to numerous 8byte chunks
*
*primitive- boolean, number, string, NaN, undefined, null 
*complex - array, object, date
*/
var num = 4; //priitive data types have one value associated with them
var array = [1,5,3,9,6]; //complex data types have multiple values associated with them

//12. Copy by Value, Copy by reference //
/*
* This concept applies to how datatypes are passed to functions or methods. Essentially, primitive 
* datatypes will not be changed by functions because their values are copied into 
* the function leaving their original location (and value) unchanged. Complex datatypes 
* such as arrays and objects, however can be changed because we are passing the reference to the original location
* to the function
*/

//copy by value
var x = 5;  //x is a primitive datatype, number

function squareIt(arg){     //the function COPIES in its value
    x=x*x;                  //and alters the COPIED value
    return x;
}

console.log(x);             //prints 5 - x remains unchanged

x.toString();           //methods are the same, do not operate on original value
console.log(typeof x);  //prints Number- x is still a number

//copy by reference
var obj = {
    a:1,
    b:2
}

function addKey(object,key,value){
    object[key] = value;
    
}
addKey(obj,'c',3);

console.log(obj); // prints { a: 1, b: 2, c: 3 } because the ORIGINAL value has been
                  // changed because the function has reference (READ ACCESS) to the 
                  //original values in memory
                  
var secondObj = obj; // copies the references of obj to secondObject

delete secondObj.a; //changes made by secondObj will now impact the base values of obj

console.log(obj);   //prints { b: 2, c: 3 } secondObj deleted key a!!!!!
                  
