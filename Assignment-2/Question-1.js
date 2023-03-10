/**
 * 
 * Write a Javascript function to check whether a triangle is equilateral,
 * isosceles or scalence
 */

function TriangleCheck(side1,side2,side3)
{
    if((side1===side2) && (side2===side3)) return `equilateral` ;
    else if ((side1===side2) || (side2===side3) || (side3===side1)) return 'isosceles' ;
    else return 'scalence' ;
}

console.log(`For the given sides the triangle is ${TriangleCheck(3,3,3)}`) ;