/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){             //searches the animals array 
    for(let i = 0; i < animals.length; i++){   //for the object name
        if(name === animals[i].name){       //loops through the array 
            return animals[i];              
        }else if(i === animals.length - 1){
            return null;                    //returns null if there is no match
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){   //replces an element if the name matches
    for(let i = 0; i < animals.length; i++){    // 
        if(name === animals[i].name){
            animals[i] = replacement;       // does nothing if there is no match
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){                 // removes the object if there is a name match
    for(let i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals.splice(i, 1)
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){              //checks if the animal to be added is
        if(animal.name && animal.species){  // valid and not already in the array
            for(let i = 0; i < animals.length; i++){
                if(animals[i].name === animal.name){
                    return true;
                }else if(i === animals.length - 1){     //only adds if the loop 
                    animals.push(animal);           //makes it to the end of the array
                } 
            }
        }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
