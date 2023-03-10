/**
 * Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:

4 in both arrays
Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:
4 in array 2
Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output:
4 in array 1

 */

function exist(arr1,arr2){
    let a1 = arr1.findIndex((value,index) =>{
        if(value==4) return index ;
        if(index===arr1.length) return -1 ;
    }) ;
    let a2 = arr2.findIndex((value,index) =>{
        if(value==4) return index ;
        if(index===arr1.length) return -1 ;
    }) ;
    if(a1!==-1 && a2!==-1){
        console.log('4 in both arrays');
    }
    else if(a1!==-1){
        console.log('4 in array 1');
    }
    else if(a2!==-1){
        console.log('4 in array 2');
    }
    else{
        console.log('4 is not in both the arrays');
    }
}

exist([1,2,3,4,5],[5,4,3,2,1]) ;