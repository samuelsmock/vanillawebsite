// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
/*the code simply converts 3 string inputs into values in an onject property such that 
all of the objects in contacts list will have the same keys*/

function makeContact(id, nameFirst, nameLast) {     
    let contact = {                 
        'id': id,
        'nameFirst': nameFirst,
        'nameLast': nameLast
    }

    return contact;
} 


function makeContactList() {    
    /*
     * this function holds all of the methods for managing and accessing our contacts
     * in the form of a returned object. 
     */
    var  contacts = [];     
    /*this is a local array used to store contacts, and is
    accessible to the APIs as a closure*/
    
    return {
        
        length: function() {        //returns the length of the local array
            return contacts.length;
        },
        
        addContact:function(contact){        //adds an object to the array
            contacts.push(contact);     
        },
        
        findContact:function (fullName){        //loops through the list searching for an
                                                //input string in the contact objects
            
            for (let i=0; i<=contacts.length-1;i++){
                if (fullName === contacts[i].nameFirst+' ' +contacts[i].nameLast){
                    return contacts[i];
                }else{
                    return undefined;
                }
            }
            
        },
        
        removeContact:function(contact){            //removes a given contact object
            for (let i=0; i<=contacts.length-1;i++){
                if (contacts[i] === contact){       //every property must match exactly 
                     contacts.splice(i,1);          //to be removed 
                     
                     //we need to explicitly tell splice to remove only 1 element
                }
            }
        },
        
        printAllContactNames:function(){    //returns a string with the contact full names
            let contactString = '';         //separated by line breaks
            for (let i=0; i<=contacts.length-1;i++){
               contactString += contacts[i].nameFirst + ' ' + contacts[i].nameLast +'\n';      
                }
                return  contactString.substring(0, contactString.length-1);
                //substring function removes the last line break
        }
        
        
    }
}


    

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
