/**
 * Can we put duplicate values in the set object
 */

/**
 * No set Doesn't allow duplicates because it follows an hashing algorithm
 * where for same value the hash will be same so it will override that data..
 */

let set = new Set() ;
set.add('phani') ;
set.add('phani') ;

set.forEach(element => {
    console.log(element) ;
});