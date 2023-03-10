
/**
 * 
 * Fahrenheit to celsius and celsius to Fahrenheit 
 * 
 */

function Fahrenheit(celsius)
{
    return ((celsius *(9/5))+32) ;
}

function Celsius(Fahrenheit)
{
    return (((Fahrenheit-32)*5)/9) ;
}

const fh = 45 ;
const cs = 60 ;
console.log(`The Fahrenheit of the given celsius is ${Fahrenheit(cs)}`) ;
console.log(`The Celsius of the given Fahrenheit is ${Celsius(fh)}`) ;
