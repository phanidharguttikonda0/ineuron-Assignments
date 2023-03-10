/**
 * Create a set object with four random numbers from 0 to 10. Check if this
 * newly created set object has 8 in it. Use set object methods.
 */

let set = new Set() ;

set.add(0) ;
set.add(1) ;
set.add(8) ;
set.add(3) ;
set.add(10) ;

console.log(set.has(8));