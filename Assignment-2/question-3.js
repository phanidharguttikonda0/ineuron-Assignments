/**
 * Write a JavaScript program to find the sum of the multiples of 3 and 5
 * under 1000
 */

function Multiples()
{
    let sum = 0 ;
    let i = 5 ;
    while(i!==1000)
    {
        if(i%3===0)
        {
            sum += i ;
        }
        i += 5 ;
    }
    return sum ;
}

console.log(`The Sum of the Multiples of 3 and 5 under 1000 is ${Multiples()}`)