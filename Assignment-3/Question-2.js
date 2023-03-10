/**
 * Write a program to find whether a given number is armstrong number or
not-
 */

function isAmstrong(num)
{
    let val = String(num) ;
    let arr = [] ;
    for(let i = 0 ; i < val.length ; i++ )
    {
        let j = i + 1 ;
        arr.push(val.substring(i,j)) ;
    }

    let sum = 0 ;
    for(let i = 0 ; i < arr.length ; i++ )
    {
        sum += Number(Math.pow(Number(arr[i]),3)) ;
    }
    if(sum===num) return true ;
    else return false ;
}

console.log(`The given Number is ${isAmstrong(153)}`);