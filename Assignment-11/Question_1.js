/**
 * Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
Sum of Numbers at Even Places = 2 + 4 = 6
Difference = 9 - 6 = 3
Sample Output:
Difference = 3
Odd Elements = 3
Even Elements = 2
Average = 3
GCD = 3
 */

function ArrayOperations(arr){

    let array = () => {
        let sumOfEven = [] ;
        let sumOfOdd = [] ;
        arr.filter(value =>{
            if(value%2===0) sumOfEven.push(value) ;
            else sumOfOdd.push(value) ;
        })
        return [sumOfOdd,sumOfEven] ;
    }

    let elements = array() ;
    let even = elements[0] ;
    let odd = elements[1] ;

    let sumOfEven = 0;
    even.forEach(value =>{
        sumOfEven += value ;
    }) ;

    let sumOfOdd = 0 ;
    odd.forEach(value =>{
        sumOfOdd += value ;
    }) ;

    // Print the difference between the two sums
    if(sumOfOdd>sumOfEven) console.log(sumOfOdd-sumOfEven) ;
    else console.log(` Difference = ${sumOfEven-sumOfOdd}`) ;

    // Print the number of elements in odd places
    odd.forEach(value => console.log(value)) ;

    // Print the number of elements in even places
    even.forEach(value => console.log(value)) ;

    //Print the number of elements in even places
    console.log(`Even Numbers length ${even.length}`) ;

    // Print the average of all elements in the array
    console.log(`Average = ${(sumOfOdd+sumOfEven)/arr.length}`) ;

    // Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
    let i = 2 ;
    let GCD = 0 ;
    if(sumOfOdd>sumOfEven){
        while(i<=(sumOfOdd/2)){
            if(sumOfOdd%i==0 && sumOfEven%i==0) GCD = i ;
            i++ ;
        }
    }
    else{
        while(i<=(sumOfEven/2)){
            if(sumOfOdd%i==0 && sumOfEven%i==0) GCD = i ;
            i++ ;
        }
    }
    console.log(`The GCD is ${GCD}`);
}

ArrayOperations([1,2,3,4,5]) ;