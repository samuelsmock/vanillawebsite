/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. Declaration and assignment//
var myName;

/*
* At the declaration phase, the variable and data type of myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined
console.log(typeof myName); // prints => undefined

/* we can then assign something to myName and it will no longer be undefined*/

myName = 'Earl';
console.log(myName); //prints Earl

// 2. initialization or assignment //
/* 
* assignment can be done on one line with the declaration
*/

var yourName = 'john';
console.log(yourName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

console.log(myVariable);

//4. Const, let and var//

/*
* variables can be declared in three differnet ways which effect their scope, 
* and ability to be reassigned.
*
* var vairables are reassignable and function scoped, meaning that it will only ever be limited
* if it is declared in a function. its declaration, but not its' initialization
* is hoisted to line 0 by the compiler
*
* let is also reassignable, but block scoped meaning it will be limited when declared within a function,
* if clause, loop, or any other curly braces block of code. it is hoisted, but neither
* the declaration, nor the initalization is accessible til the line in which it
* is declared.
*
* const variables cannot be reassigned and are limited by any curly braces  block
* of code it is hoisted, but neither the declaration, nor the initalization is
* accessible til the line in which it is declared.
*/

if(true){
    var x = 2;
    let y = 2;
    const z = 2;
}


//console.log(y+1); -> throws a reference error
//console.log(z+1); -> throws a reference error
console.log(x+1); //-> prints 3

const constant =2;

//constant = 4; -> throws type error

// 5. Hoisting//
/*
*
* var variables and functions are hoisted to line 0 during compiling
* var variables' declaration but not its initialization are hoisted
*
* let and const variables are hoisted, but neither their declaration.
* nor their initialization are hoisted. invoking them before
* their declaration results in reference errors.
*
*/

console.log(hoistMeVar); //prints undefined
hoistMeVar = 'Hoist me'; //throws no error
console.log(hoistMeVar); // prints "Hoist Me"

var hoistMeVar;

//console.log(hoistMeLet); ->throws a refrenece error
//hoistMeLet = 'Hoist me'; -> throws reference 
//console.log(hoistMeLet); // prints "Hoist Me"

let hoistMeLet;

