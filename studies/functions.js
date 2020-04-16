/*
* FUNCTIONS:
*
* 0. Functions allow us to execute the same block of code in other places without 
* having to rewrite anything
*
* 1. They also allow us to send in different variables and subject them to the same 
* processing.
*
*/

//1. The two phases to using functions: First we must declare. Next we can execute, invoke or call a function.//

/*
* 
* The first phase of using a function is the declaration ohase this is done with 
* the function keyword.
*
* The second phase is invoking, executing or calling the function, this is where we will pass 
* in arguments if there are any parameters
*
*/

function doSomething(parameter){    //here we are declaring the function for future use
    console.log(parameter);         //nothing actually happens during this phase
}

doSomething("argument");        //this is where we invoke the function and the code is actually executed
                                //prints 'arguement'
                                
//2. The difference between a function’s parameters and arguments PASSED to a function?                                

/*
* A function's parameters are the variables that are expected as inputs defined
* at declaration. They are the not a specific value.
*
*A functions arguments are the actual values sent as inputs at the time of function call
*Each time a function is called it can have different arguments, but the parameters will 
*be the same.
*
*/

function addStuff(parameter1, parameter2, parameter3){
    return parameter1 + parameter2 + parameter3;   //the parameters can be any number
}   

console.log(addStuff(1,2,3)); //1,2,3 are the arguments on this given invocation
console.log(addStuff(4,5,6)); // 4,5,6 are the arguments this time

//3. The syntax for a NAMED function?//
/*
*
* When declaring a named function, use function keyword, function name, (parameter),{}
*
*/

function func(parameter){
    console.log('this is a NAMED function');
}

//4. How do we assign a function to a variable?//
/**
*
* We can assign functions to variables and create function expressions.
* 
* To do so we will use the following syntax
* 
* var <funct. exp. name> = function(parameters){
    
    code;
    
}
*
* where the term on the right side of the equals sign is known as an anonymous function
* 
*/

var add = function(x,y){    //the term "function(x,y)" is an anonymous function
    return x+y;
}

var z = add(1,2);       //we can now call the function expression just like a 
                        //declared function

console.log(z); //prints 3

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
/*
*
* functions take inputs if any in the parentheses, and will only have outputs if
* the return keyword is used.
*
*/

function minus(x,y){
    return x-y;
}

z = minus(1,2);

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

/** 
 * 
 * Functions have access to write and edit variables, whether var, let or const, 
 * that are declared within the parent scope. Parent scope means the scope
 * or codeblock within which the function is declared.
 * 
 * however, var, let , and const are all limited by function scope, meaning any variable
 * declared within a function will forever be limited to that function. It also
 * means you do not need to worry about duplicate variable names between functions 
 * (think 'i'  in a loop).
 * 
 *
 **/
 
var globalVar = "this variable is global";
function scope(){
    var localVar =" this variable is local";
    console.log(globalVar);
    console.log(localVar);
}

//console.log(localVar); this would throw a reference error

//7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!
/*
*
* Functions within functions can access variables the scope of their parent function
* this is known as a closure around thos variables local to the parent functions
*/

function func1(x){      
    var closedVar = "this variable is included in a closure!";
    function func2(){
         return (closedVar + x);    
    }
    return func2(); 
    /*
    * both the variable, closedVar and the function parameter x are accessible by
    * func2 due to closures!
    */
}
console.log(func1(" yeah, that's right!")); //prints this variable is included in a closure! yeah, that's right!