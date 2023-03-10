/**
 * Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
 */

function Separating(array){
    let setMap = new Set() ;
    let list1 = [] ;
    let list2 = [] ;
    array.forEach(element => {
        if(setMap.has(element)){
            list1.push(element) ;
        }
        else{
            setMap.add(element) ;
            list2.push(element) ;
        }
    });
    return [list1, list2] ;
}

let array = [1, 2, 3, 2, 3, 4, 5] ;
let arr = Separating(array) ;
console.log(`The duplicates in the given ${array} are ${arr[0]}`) ;
console.log(`The Remaining Elements in the given ${array} are ${arr[1]}`) ;