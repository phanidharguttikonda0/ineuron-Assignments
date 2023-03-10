/**
Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”
 */

function replacing(s){
    let a = s.indexOf(' ') 
    let s1 = s.substring(0,a) ;
    let s2 = s.substring(a+1,s.length) ;
    return `${s2} ${s1}` ;
}

console.log(replacing('Hey Man')) ;