/**
 * Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
3
 */

const sum = (arr) =>{
    let sum = 0 ;
    sum = arr.reduce((number1,number2 )=> number1 + number2) ;
    return sum ;
}

const average = (arr) =>{
    return (arr.reduce((number1,number2)=>number1+number2) )/arr.length;
}

console.log(`The sum of the elements in the array ${sum([1,2,3,4,5])}`);
console.log(`The average of the elements in the array ${average([1,2,3,4,5])}`) ;
