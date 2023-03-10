/**
 * Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();
Sample Input:
[ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:
[ 1, 2, 3, 4, 5 ]
 */

function flatening(array,index,array1){

    if (index === array.length){
        return array1 ;
    }
    else if(Object.prototype.toString.call(array[index]).slice(8, 13) === 
    Object.prototype.toString.call(new Array()).slice(8, 13)){
        let array_2 =  flatening(array[index],0,array1) ;
        if(array.length === index){
            return array_2 ;
        }
        else{
            return flatening(array,index + 1,array1) ;
        }
    }
    else{

        array1.push(array[index]) ;
        return flatening(array,index+1,array1) ;
    }
}

console.log(flatening([[1,2,3],5,6,7,[8,9,10,[11,12,13]]], 0,new Array()));

/**
 * I Solved this Promblem using recursion by keep tracking of each index...
 */
