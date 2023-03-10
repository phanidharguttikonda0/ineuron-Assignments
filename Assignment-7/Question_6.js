/**
What string method can be used to check the occurrence of a specified
text in a string?
 */

function Occurances(s,text){

    if (s.length >= text.length){
        let l = text.length - 1 ;
        let i = 0 ;
        let j = 0 ;
        while(l!=s.length){
            if(s.substring(i,l+1)===text) j++ ;
            i += 1
            l += 1;
        }
        return j ;
    }
    else return 0 ;
}

console.log(Occurances('Hey phani is an good man , phani is slow learner , phani takes more time to learn','phani')) ;

// or 

function NoOfOccurances(){
    let a = 'heyeae'
    console.log(a.match(/e/g).length);
}
NoOfOccurances()