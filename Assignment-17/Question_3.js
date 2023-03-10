/*
    Create a functional iterator, with a next function.
*/

function iterator(){
    count = 0 ;
    return function next(){ count++ ; return count ;} ;
}

let next = iterator() ;
let arr = ['phani','kavya','phanidhar','katyayani'] ;
let i = 0 ;
while(i !== arr.length){
    console.log(arr[i]) ;
    i = next() ;
}