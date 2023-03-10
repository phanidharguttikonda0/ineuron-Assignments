/**
 * 
 * @param {*} b
 * Give an example of a Higher Order function and a call back function
 * used in the same program. 
 */

function a(b){
    b() ;
 }

a(()=>{
console.log('phanidhar') ;
}) ;

a(function(){
    console.log('phani') ;
}) ;