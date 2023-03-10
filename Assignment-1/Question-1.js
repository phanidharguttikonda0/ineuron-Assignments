
/**
 * Write a program to find whether a given year is a leap year or not.
 */

function isLeapyear(year)
{
    if(year%4===0) return true ;
    else return false ;
}

console.log(isLeapyear(2004));