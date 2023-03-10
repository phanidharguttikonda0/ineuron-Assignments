/**
Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr

2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr
3
where r is the radius
3) Cone- Volume= πr
2h/3

where r is the radius and h is the height of the cone.
 */


class Cylinder {
    constructor(radius,height)
    {
        this.radius = radius ;
        this.height = height ;
    }

    getVolume()
    {
        return (2*3.14*this.radius*this.height).toFixed(4) ;
    }
}

class Sphere 
{
    constructor(radius)
    {
        this.radius = radius ;
    }

    getVolume()
    {
        return ((4/3)*3.14*this.radius).toFixed(4) ;
    }
}

class Cone 
{
    constructor(radius,height)
    {
        this.radius = radius ;
        this.height = height ;
    }

    getVolume()
    {
        return ((2*3.14*this.radius*this.height)/3).toFixed(4) ;
    }
}

/**
 * Now let's access them all 
 */

const Cylinderobj = new Cylinder(3,4) ;
console.log(`${Cylinderobj.getVolume()}`);

const Sphereobj =  new Sphere(3) ;
console.log(`${Sphereobj.getVolume()}`); ;

const ConeObj =  new Cone(3,4) ;
console.log(`${ConeObj.getVolume()}`); ;
