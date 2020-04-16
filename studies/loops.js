/**
* LOOPS:
*
*0. allow you to execute the same code block, without writing it all out multiple times
*
*1. commonly used on arrays and objects to do the same thing to each element
*
*2. require an index with a starting point, condition(or ending point), and increment
*
*3. Loops (especially for and while loops), are prone to infinite looping behavior.
*   this happens when the increment and end condition are such that the end condition is never met.
*   As an example, a positive increment up from zero, and a negative end condition will
*   reach an end. Infinite loops are debugged by altering the increment, start, or condition.
*
*/

//1. While for and for-in loops//
/*
* While loops have the index declaration outside of the loop, a condition within
* the while keyword declaration, and increment the index within the codeblock
*
*For loops, have the index delcaration, condition, and increment all in the loop
*declaration separated by semicolon. This is perhaps the most common loop.
*
*For-in loops are specifically used for objects. The "index" in this case is the key
*value, the condition is implicit as the key existing in the object, and the increment
*is likewise built in to the loop definition.
*
*/
var array = [1,2,3,4,5];
var object = {
    key1: "1",
    key2: "2",
    key3: "3"
}

var i = 0                   //index is declared externally, and inremented internally
while(i<array.length){
    console.log(array[i]);
    i++;
}

for (var j = 0; j <array.length; j++){  //index is declared, and incremented in declaration
    console.log(array[j]);
}


for (var key in object){            //key can be any word, increment and condition are built-in
    console.log(object[key]);
}

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0//
/*
*
* Indexes can start anywhere and end anywhere based on the increments and conditions
* Lets see 2 intances going up from 0 and down to 0
*
*/
for (let j = 0; j <=10; j++){  //index is declared, and incremented in declaration
    console.log(j);             // prints 0-10 in that order
}

for (let j = 10; j >=0; j--){  //index is declared, and incremented in declaration
    console.log(j);             // prints 10-0 in that order
}

// 3. Loop over an Array, forwards and backwards//
/* 
*when the index of the loop is applied to the index of an array, you can access each value and
*do something to it
*
*/

var arr =['alpha', 'bravo', 'charlie'];

for (let k = 0; k<arr.length; k++){ //prints all elements starting at the first
    console.log(arr[k]);
}

for (let k = arr.length-1; k>= 0; k--){ //prints all elements starting at the last
    console.log(arr[k]);
}


//4. Loop over an Object//
/*
*
* the for in loop is used for objects, and usesa variable that is associated with 
*object key values, and by default breaks when the end of the objects' properties
*is reached
*
*/

var object = {
    key1: "1",
    key2: "2",
    key3: "3"
}

for (var x in object){            //key can be any variable, increment and condition are built-in
    console.log(x);             //prints all the KEY names
}
