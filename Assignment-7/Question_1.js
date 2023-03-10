/**
Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...
 */

function stringTruncate(s){
    if(s.length>4){
        return s.substring(0,4) + '...' ;
    }
    else{
        return s ;
    }
}

let output1 = stringTruncate('phani') ;
console.log(output1);

let output2 = stringTruncate('phanidhar') ;
console.log(output2);
