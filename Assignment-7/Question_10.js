/**
10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.

c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
 */

let string = 'phani'

string = string.toUpperCase() ;
console.log(string);

string = string.toLowerCase() ;
console.log(string);

// b) Convert only the first character to uppercase.
let a = string[0] ;
string = string.replace(string[0],a.toUpperCase()) ;
console.log(string);

// d) Break the string into two halves and swap them.
a = string.substring(0,string.length/2) ;

b = string.substring(string.length/2,string.length) 

string = b+a 
console.log(string);

//  Count the repeating characters.

let map = new Map() ;

for(let k = 0 ; k < string.length ; k++){
    if(map.has(string[k])){
        let value = Map.get(string[k]) ;
        map.set(string[k],value+1) ;
    }
    else{
        map.set(string[k],1) ; 
    }
}

// forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;

let count = 0 ;
map.forEach((key,value) => {
    if(map.get(key)>=2){
        count++ ;
    }
}) ;

console.log(`The number of repeating characters for a given string ${string} are ${count}`) ;

// Reverse the string

let i = string.length - 1
a = string ;
string = '' ;
while(i!=-1){
    string += a[i] ;
    i-- ;
}
console.log(string);