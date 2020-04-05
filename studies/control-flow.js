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
/*
* This is the most basic control flow, and is always found at the top of a control flow
* chain. If this condition is fulfilled the chain stops
*
*/
var num7 = 14;
var num8 = 6;

if(num8< num7/2){
    console.log('the chain stops on the first condition');
}
//any other conditions below this are not considered

// 2. Else-if//
/*
* These are the conditions sandwiched in between the initial case and the default.
* The order you choose for these can be very important, because like the base case 
* if the compiler finds a true case it will break the chain
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
/*
* this is the default code action in the case that none of the other cases are
* true. Be careful with this because it has no condition.
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

/*
*
* Switch is an alternative to if-else chains, that allow you to more succinctly 
* check the state of a single variable. Do not forget the break statements, which
* break the switch statement when a true statement is found
*
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
