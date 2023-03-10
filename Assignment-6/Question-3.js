/**
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
 */

function computeDash(number)
{
    let val = String(number) ;
    let sum = val[0] ;
    for(let i = 0 ; i < val.length-1 ; i++ )
    {
        let num1 = Number(val[i]) ;
        let num2 = Number(val[i+1]) ;
        if(num1%2===0 && num2%2===0)
        {
            sum += `-${val[i+1]}` ;
        }
        else 
        {
            sum += `${val[i+1]}` ;
        }
    }
    return sum ;
}

console.log(`The Computed Value is ${computeDash(80254688)}`) ;