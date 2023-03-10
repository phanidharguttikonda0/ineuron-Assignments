/*
    In the following two arrays find which two elements match
    using iterators.
    Array 1 - [“a”, “b”, “c”, “d”]
    Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
*/


function common(Array1, Array2){
    for(x of Array1){
        for(y of Array2){
            if(x === y) return x ;
        }
    }
}

Array1 = ['a', 'b', 'c', 'd'] ;
Array2 = ['e', 'f', 'g', 'h', 'a', 'i', 'j'] ;

console.log(common(Array1, Array2)) ;
var Array1 , Array2 ;