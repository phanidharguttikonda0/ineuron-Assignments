/**
Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
 */

/**
 * Steps are :
 * -> First we have to Sort the Array and then we can easily Find Out
 */

function find_largest(n)
{
    const arr = [3,45,6,7,23,5,7,8] ;
    Sort(arr) ; // as this Array is an Object we have passed by reference so automatically the arr over here will be Sorted
    if(n>=arr.length) return arr[0] ;
    else return arr[arr.length-n]  ;
}

function Sort(arr)
{
    for (let i = 0 ; i < arr.length-1 ; i++ )
    {
        for(let j = 0 ; j < arr.length - i-1 ; j++)
        {
            if(arr[j]>arr[j+1])
            {
                let k = arr[j] ;
                arr[j] = arr[j + 1] ;
                arr[j + 1] = k ;
            }
        }
    }
}

const num = 3 ;
console.log(`The ${num} largest number from the arr is ${find_largest(num)}`) ;