/**
 * Write a JavaScript program to iterate over an array inputted by the user using
mapping. Perform the square of all elements in the original array, store the
squares in a new array and make a mapping for the squares and display it.
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Original Array = [ 1, 2, 3, 4, 5 ]
New Array = [ 1, 4, 9, 16, 25 ]
Mapping = squares => [ 1, 4, 9, 16, 25 ]
Output:
[ 1, 4, 9, 16, 25 ]
 */

let newArray = new Array() ;
let OrginalArray = [1,2,3,4,5] ;
OrginalArray.forEach((num)=>{
    newArray.push(Math.pow(num,2)) ;
}) ;

console.log(newArray) ;