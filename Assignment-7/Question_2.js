/**
Input a String S with multiple words, and remove white spaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”
 */


function removeWhiteSpaces(s){
    return s.replaceAll(' ','') ;
}

console.log(removeWhiteSpaces('great things takes time'));