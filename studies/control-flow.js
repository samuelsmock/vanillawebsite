/*
*
* CONTROL FLOW:
*
*0. Built in statements that direct the flow of execution based off of 
*logical checks.
*
*1. The most common are if, else if statements but switch statements can be useful 
* for evaluation based off of cases
*
*/

// 1. If //
/**
* This is the most basic control flow, and is always found at the top of a control flow
* chain. If this condition is fulfilled the chain stops. For this reason, there can only be one if
* statement at the top of a conditional chain. Another if statement is used, it starts a new chain
*
* if is a key word followed by parentheses followed by code block in curly braces
* 
* syntax: if keyword condition in parentheses code in curly brackets
* if (condition){code};
* 
*/
var num7 = 14;
var num8 = 6;

if(num8< num7/2){                                           // if keyword(condition){code}
    console.log('the chain stops on the first condition');
}
//any other conditions below this are not considered

// 2. Else-if//
/**
* These are the conditions sandwiched in between the initial case and the default.
* The order you choose for these can be very important, because like the base case, 
* if the compiler finds a true case it will break the chain. There can be as many 
* else if statements as needed
* 
* syntax: else if keyword condition in parentheses, code in curly brackets
* 
* if (condition){
* code;
* }else if(condition){
*    code;
*}
*
*/

if (1>2){
    console.log('base case');
}else if(1<2){
    console.log("case 1");      //only prints case 1 even though 2<3 => true
}else if (2<3){
    console.log('case2');
}

//3. Else//
/**
* this is an OPTIONAL default code action in the case that none of the other cases (if
* or else if) are true. Be careful with this because it has no condition. There may
* be 1 else condition or no else condition
*
* syntax: else key word codeblock in curly brackets (end of conditional chain)
*  if (condition){
* code;
* }else if(condition){
*    code;
* }else{
    code;
}
* 
*
*/
if (1>2){
    console.log('base case');
}else if(1>2){
    console.log("case 1");      //prints 'no case was fulfilled'
}else if (2>3){
    console.log('case2');
}else{
    console.log('no case was fulfilled');
}    

// 4. Switch//

/**
*
* Switch is an alternative to if-else chains, that allow you to more succinctly 
* check the state of a single variable. Do not forget the break statements, which
* break the switch statement when a true statement is found
*
* 
* syntax: switch keyword expression in parentheses curly brackets, case keyword result of expression colon, code
* 
* switch(espression){
    case value:
        code;
    case value2:
        code2
}
*/

var var6 = "howdy";
console.log(typeof(var6));

switch(typeof(var6)){
    case 'boolean':
        console.log('its a boolean');
        break;                          //prints it's a string!
    case 'string':     
        console.log('its a string!');
        break;
    
}
