
/**
 * 
 * Finding the Factorial of an number
 * 
 */

function Factorial(fact)
{
    if(fact==1) return 1 ;
    else return fact*Factorial(fact-1) ;
}

console.log(`The Factorial of 5 is ${Factorial(5)}`)