/**
 * Write a program to find whether a given number is special number or not-
 */

function isSpecialNumber(num)
{
    let val  = String(num) ;
    let arr = [] ;
    for(let i = 0 ; i < val.length ; i++ )
    {
        arr.push(Number(val[i])) ;
    }

    let Factorial = function (fact)
    {
        if(fact<=1) return 1 ;
        else return fact*Factorial(fact-1) ;
    }
    let sum = 0 ;
    for(let i = 0 ; i < arr.length ; i++ )
    {
        
        sum += Factorial(arr[i]) ;
    }
    if(sum===num) return true ;
    else return false ;
}

console.log(`Checking the Given Number is Special Number  ${isSpecialNumber(145)}`)