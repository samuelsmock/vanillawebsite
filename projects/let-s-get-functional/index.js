// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-samuelsmock");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */



var maleCount = function(array) {
   //I: array of objects
   //O: number of males
   
  return  _.filter(array, function(customerObj){
        //filter out all of the male customers 
        return customerObj.gender === "male";
    }).length
};

var femaleCount = function(array){
    //I: array of customer objs
    //O: number of female custs
    return _.reduce(array, function(prev, current){
        //if the objects gender is female, increment the seed
        if (current.gender === 'female'){
            prev++;
        }    
        return prev;
    }, 0)
    
};

var oldestCustomer = function(array) {
    // Input: array of customer objects
    // Output: string of oldest customer's name
    let filterOutput = " "; // Declaring a new variable called filterOutput and assigning it to an empty string
    let ageOfCustomers = 0; // Declaring a new variable called ageOfCustomers and assigning it to 0
    for (var i = 0; i < array.length; i++) { // For loop; starting condition is i is equal 0, stopping condition
    // is i is less than the length of array, and the increment is plus 1
        if (array[i].age >= ageOfCustomers) { // If statement; if the age of the array index is greater than
        // or equal to the ageOfCustomers number, this code will run
            filterOutput = array[i].name; // filterOutput will be reassigned to the name of the oldest array index
            ageOfCustomers = array[i].age; // ageOfCustomers will be reassigned to the age of the oldest array index
        }
    } return filterOutput; // Return filterOutput
};
var youngestCustomer = function(array) {
    // Input: array of customer objects
    // Output: string of youngest customer's name
    let filterOutput = " "; // Declaring a new variable called filterOutput and assigning it to an empty string
    let ageOfCustomers = 1000; // Declaring a new variable called ageOfCustomers and assigning it to 1000
    for (var i = 0; i < array.length; i++) { // For loop; starting condition is i is equal 0, stopping condition
    // is i is less than the length of array, and the increment is plus 1
        if (array[i].age <= ageOfCustomers) { // If statement; if the age of the array index is less than
        // or equal to the ageOfCustomers number, this code will run
            filterOutput = array[i].name; // filterOutput will be reassigned to the name of the youngest array index
            ageOfCustomers = array[i].age; // ageOfCustomers will be reassigned to the age of the youngest array index
        }
    } return filterOutput; // Return filterOutput
};
var averageBalance = function(array) {
    // Input: array of customer objects
    // Output: number of average balance
    let filterOutput = 0; // Declaring a new variable called filterOutput and assigning it to 0
    let averageBalances = 0; // Declaring a new variable called averageBalances and assigning it to 0
    for (var i = 0; i < array.length; i++) { // For loop; starting condition is i is equal 0, stopping condition
    // is i is less than the length of array, and the increment is plus 1
        averageBalances += Number(array[i].balance.replace('$', ' ').replace(',', "")); // averageBalances = averageBalances
        // plus the sum of all the balances in the array
    } return averageBalances / array.length; // Return averageBalances divided by the length of the array
};

var firstLetterCount = function(arr, letter){   //takes an array of objects and a character
//returns the number of objects with a name property starting with that character
    //I: array of customer objects
    let count = 0;          // initialize the count

    for(let i = 0; i< arr.length; i++){ //check each object
    // only add to the count if first character is equal to the input letter (case insensitive)
        if (arr[i].name[0].toUpperCase() === letter.toUpperCase()){
    
            count += 1;
    
        }
    }
    return count;       // return the count
    
    //O: number of names starting with specified leter
};

var friendFirstLetterCount = function(array, customer, letter){
    //I: array of customer objects, customer name, character to check against friends list
    
    let count = 0;      // initialize the count variable to 0
    let customerObj;    //initialize a function scoped variable for our customers' object
    
    //search the array and find the customer object
    for(let i = 0; i < array.length; i++){
        if(array[i].name === customer){
            customerObj = array[i];
        }
    }
    


    var friendsList = customerObj.friends;   //an array of friend objects for our specific customer
    
  
   
    //search the friends list for an instance of names starting with the letter
    for(let i = 0; i< friendsList.length; i++){
       if(friendsList[i].name[0].toUpperCase() === letter.toUpperCase()){
            count += 1;
        }
    }

    return count;
//O: number of friends in given friends list with that letter
};


var friendsCount = function(array, person){  //
  //I: Customer list and name string
  let friendsCount = []; //initialize a friends count array
   
   for (let i = 0; i < array.length; i++){
        //some returns a boolean cooresponding to if a single element of array[i].friends 
        //itself has an element with a "name" value of person.
        if(_.some(array[i].friends, function(elem,index) {return elem['name'] === person})){
            
        //if person appears in friends list ^^^^^ add the name of the owner to friendsList
           
            friendsCount.push(array[i].name);
        }
    }

        //return the populated array
    return friendsCount;
    //O: an array containing list of names that person is friends with
};

var topThreeTags = function(array){ //takes in a customer list with tags properties, and returns the top 3 tags
    //I: Customer list - array of objects
    var allTags = [];   // initialize a list of all tags, including repeats
    var countTags = []; // initialize an array which will hold objects of form {name:<name>, count: <count>}
    
    for (let i = 0; i<array.length; i++){           //fill allTags with tags from every customer in list
        allTags = allTags.concat(array[i].tags);
    }
    
    
    //allTags is an array of every tag that appears including repeats
   
   for (let i = 0; i < allTags.length; i++){            
      //loop through the allTags array to ***REDUCE*** it to a series of objects with the tag name and count.
      //this array of objects is called countTags
      
       if (i === _.indexof(allTags,allTags[i])){       //if this element is the first instance of the tag
      
           countTags.push({name: allTags[i], count:1}); //create a new object for the tag and inititalize its count to 1
      
       }else{                 //if this is a repeat tag,
                             //add 1 to the count property of the object already in countTags
            
          //this is a filter function which finds the tags' object in countTags so we can increment its' count  
           _.filter(countTags,function(elem, index, array){ 
              return elem.name === allTags[i];
           })[0].count++;       //increment this objects' count
       }
   }
   
        //now all thats left to do is sort the countTags array by count property
        
   countTags = countTags.sort(function(a,b){return (a.count>b.count ? -1: 1);});
   
       //countTags is now sorted based on count value
   
   return [countTags[0].name, countTags[1].name, countTags[2].name,];   //return the name of the first three tags
 
    //O: array of the top three tags as strings
};

var genderCount = function(array){ //returns an object listing the number of each gender in customer list
    //I: Customer list -array of objects
//initialize result object to values of zero
    var result = {male: 0, female: 0, 'non-binary': 0}; 
    
    //use reduce to cycle through the customer list array, returning a 3 valued
    //array with counts of male, female, nonbinary in that order
    
    var resultArray =  _.reduce(array, function(prev,elem,index){

        // the 'combination function for reduce adds one element to each array slot
        // we use an array to avoid having to search an object when incrementing

        if (elem.gender === 'male'){
             prev[0]++;
        }else if(elem.gender === 'female'){
            prev[1]++;
        }else if (elem.gender === "non-binary"){
            prev[2]++;
        }
        return prev;
    }, [0,0,0]);
    
   result.male = resultArray[0];
   result.female = resultArray[1];          //assign the values from our resultArray
   result['non-binary'] = resultArray[2];   //to the result object
   
   return result;   //return that object
    
    //O: An array of 4 objects containing the name and count for each gender 
   
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
