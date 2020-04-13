//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//should take an object and return its values in an array
function objectValues(object) {
    const resultArr = []; //make a variable that is an empty array to catch values
    for(let key in object) { //loop over object keys
        resultArr.push(object[key]); //push values into empty array
    }
    return resultArr; //return new array
}
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space

function keysToString(object) {
    var string = ""; //make an empty string variable to catch object keys
    for(var key in object) { //loop over object
        string += key + " "; //each loop add the key and a space to string variable
    }
    return string.substring(0, string.length -1); //return string variable with no space on end
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
    var string = ""; //make an empty variable to catch values
    for(var key in object) { //loop over object
        if(typeof(object[key]) === 'string') { //if the type of value is a string
        string += object[key] + " "; //add it to empty string
        }
    }
    return string.substring(0, string.length -1); //return string with no space on end
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object 
function arrayOrObject(collection) {
    if(typeof(collection) === 'object' && Array.isArray(collection) === true) { // if the type of collection input is an object and it is an array
        return "array"; //return array
    } else if(typeof(collection) === 'object' && Array.isArray(collection) === false) { //if it is an object but not an array
        return "object"; //return object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord(string) {
                            
    var cap = string.charAt(0).toUpperCase(); // take the character at index 0                      
                                              // and capitalize it    
    return cap + string.substring(1,string.length); //return the new word  
}

// console.log(capitalizeWord('hello')); -> prints Hello
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/// Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {
    var arr = string.split(' ');    //split the string into an array of the words
  
    for(let i = 0; i<arr.length; i++){ //loop through array using toUpperCase to get first char
         var cap = arr[i].charAt(0).toUpperCase(); 
         arr[i] = cap + arr[i].substring(1,string.length);  //concatenate capitalized character back on
        
    }
    return arr.join(' ');           //return the array joined back together
}    
console.log(capitalizeAllWords('hello how are you'));

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(object) {   //
        var name =object['name'];   //assign the name property to a function variable
        
                                    
        var capName = name.charAt(0).toUpperCase() + name.slice(1);   
            //Capitalize 1st character
            //concatenate the capitalized first letter to the rest of the name string
            //assign newly capitalized name to a function variable
        return "Welcome" +' ' + capName + '!'; //return "welcome <name>""
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
        var name =object['name'];   //assign the name property to a function variable
        
                                    
        var capName = name.charAt(0).toUpperCase() + name.slice(1);   
            //Capitalize 1st character
            //concatenate the capitalized first letter to the rest of the name string
            //assign newly capitalized name to a function variable
        
         var species =object['species'];   //assign the species property to a function variable
        
                                    
        var capSpecies = species.charAt(0).toUpperCase() + species.slice(1);   
            //Capitalize 1st character
            //concatenate the capitalized first letter to the rest of the species string
            //assign newly capitalized name to a function variable
        
        
        return `${capName} is a ${capSpecies}`; 
        //capName + ' is a ' + capSpecies; //return "welcome <name>""
}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a 
//string separated by a space, if there are no noises return 'there are no noises'

function maybeNoises(object) {
    if (object.hasOwnProperty('noises') && object['noises'].length>0){    //verify that object has noises array and array is not empty
        return object['noises'].join(' ');                                //return noise array as a string using join
    }else{
        return "there are no noises";                                   //return there are no noises if not
    }  
                               
                                
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."

function hasWord(string, word) {    //use the includes method to check if string includes input word
    if (string.includes(word)){
        return true;
    }else{
        return false;
    }                                //return true if it does, otherwise false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object"

function addFriend (name, object) {     
    object['friends'].push(name);   //add input name to input object friends' array
    return object;                //return said object
}                                   


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
function isFriend(name, object) {
    //access friends array in input object and check if name exists
    if(!object.hasOwnProperty('friends')) {
        return false;
    } else {
    return ((object['friends'].includes(name)) ? true : false ); //return true if it does
    //return false if it does not
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, array) {
    var friendList = []; //create empty array to hold names in friends list
    var notFriends = []; //create empty array to hold names not in friends
    for(let i = 0; i < array.length; i++) { //access the friends list of the input name
        if (array[i]['name'] === name) {
            friendList = array[i]['friends'];
        }
    }
    console.log(friendList);
    for(let i = 0; i < array.length; i++) {//create a list of all the names in the array
        if (!friendList.includes(array[i]['name']) && array[i]['name'] !== name) { //compares each entry in the array with the friendList and input name
            notFriends.push(array[i]['name']); //if input name is not in friendList and doesn't equal argument name, push to notFriends
        }
    }
    console.log(notFriends);
    return notFriends; //return a list of the names not included in the friends list
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
If <key> does not exist on <object> create it."*/
function updateObject(object, key, value) { //takes object, key, and value as parameters
    object[key] = value; //update the input key of object to input value
    return object; //return the object
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"
function removeProperties(object, array) {
    for (var key in object) { //create a loop to iterate through object
        if(array.includes(key)){ //if input array is the same as a key in input object
            delete object[key]; //remove that property from object
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed"
function dedup(array) {
    var result = [];//make an empty array to hold filtered results
    for(var i = 0; i < array.length; i++) { //make a for loop to iterate over array
        if (i === array.indexOf(array[i])) { //at each index, if i = array.indexof[i]
            result.push(array[i]);    //push onto filtered array
        }
    } 
    return result;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}