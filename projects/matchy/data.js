/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

/////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// useing the keyword var, initialize a variable named “animal” //
// “animal” should be assigned to the value of an empty object //
var animal = {};
// add a property called ‘species’ to the animal object //
// initialize the species key with a species in the form of a string //
// must add the species property using dot notation //
animal.species = 'Canine';
// add a name property to the animal object //
// must do this using bracket notation //
// the name of the key inside the brackets must be enclosed within quotation marks, since we know the actual name of the specific key //
// set the “name” key’s value to a string //
animal['name'] = 'Muffin';
// add a property named “noises” and initialize it to the value of an empty array //
// can accomplish this using either dot or bracket notation //
animal.noises = [];
// print the animal object to the console using console.log() //
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named noises initialized to the value of an empty array //
var noises = [];
noises[0] = 'woof';
noises.push('bowow');           ///adding strings to noises 3 different ways
noises.unshift('bark');
noises[noises.length] = 'ruff';
console.log(noises.length);
console.log(noises[noises.length - 1]);     //tests to ake sure things look right
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('grrr');     //playing with adding strings in even more ways
console.log(animal);





/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot and bracket notation using the key
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  bracket notation using the index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals =[];        //initialize an array that will hold animal objects
animals.push(animal);

console.log(animals);       //veriffy things look right

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'whosh']
};

animals.push(duck);     

console.log(animals);

var horse = {
    species: 'horse',
    name: 'Morris',
    noises: ['whinny', 'neigh', 'bree', 'pfoot']
};

var cat = {
    species: 'cat',
    name: 'Eleanor',
    noises: ['meow', 'hiss', 'brrt', 'eeeeeee']
};

animals.push(horse, cat);       //we can add 2 objects in one line of code!

console.log(animals);
console.log(animals.length);    //everythig looks as it should!




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; // we chose an array because a list of friends doesnt have a 
                      //heirarchy or obvious keys. it is essentially a ordered list
                     
function getRandom(arr){        //simply returns an interger between 0 and arr.length
    
    return Math.floor(Math.random() * (arr.length));    //Math.floor strips the decimal from a number
}                                                       //forcing it into interger

var randomAnimalName    =    animals[getRandom(animals)].name;  //set the variable to a random 
friends.push(randomAnimalName);                             //value using the getRandom function

console.log(friends);       //Everything looks right!

animals[1].friends = friends;       //assign this friend list to a new  onject property 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}