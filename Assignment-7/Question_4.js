/**
Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”
 */

function replacing(s){
    if(s.startsWith('a')) return s.replace('a','x') ;
    else return s ;
}

console.log(replacing('apple'));