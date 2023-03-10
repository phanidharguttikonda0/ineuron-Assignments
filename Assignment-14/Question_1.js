/** 
 * /*
 * Write a JavaScript program to:
 * a) filter employees according to department = IT 
 * b) filter employees who earn a salary < 650000
 */

let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]

//* filter employees according to department = IT
function department(){
    return employees.filter(element =>{
        if(element.department === 'IT'){
            return element ;
        }
    }) ;
}
console.log(department());

// * filter employees who earn a salary < 650000
function salary(){
    return employees.filter(element =>{
        if(element.Salary < 65000) return element ;
    })
}

console.log(salary()) ;