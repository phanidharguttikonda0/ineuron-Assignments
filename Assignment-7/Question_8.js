/**
Write a Javascript function to test whether the first character of a string
is lowercase.
 */

function firstisLower(s){
    s = s.charCodeAt(0);
    if(s>=96 && s<=122) return true ;
    else return false ;
}
let decesion = firstisLower('phani')

if(decesion) console.log('Yes First Character is in lower case') ;
else console.log('No the  First Character is not in lower case') ;