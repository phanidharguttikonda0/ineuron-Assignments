/**
 * Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object
 */

// creating set object 

let set = new Set() ;

// Adding new element to set object

set.add(45) ;
set.add(1) ;
set.add(18) ;
set.add(77) ;
set.add(33) ;

set.forEach(element => {
    console.log(element);
});
//  Deleting element from set object

set.delete(1) ;

console.log('After deleting the 1');
set.forEach(element => {
    console.log(element);
});