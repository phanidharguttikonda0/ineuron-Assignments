/**
 * Write a JavaScript program to map Employee Records according to Employee
IDs.
Employee: { id, name, salary }
a) Print an array of all employee ids
b) Print count of employees
c) Print the name of the employee according to their id { key: value }
d) Store the salaries of all employees in an array
e) Calculate the average salary the company is paying to its employees
Sample Input:
"id": [ 67, 48, 29 ]
"name": [ "Hitanshu", “Ninad”, “Amandeep” ]
"salary": [ 75000, 82000, 98000 ]
Output:
[ 67, 48, 29 ]
3
67: Hitanshu
48: Ninad
29: Amandeep
[ 75000, 82000, 98000 ]
85000
 */

class  EmployeeRecords{
    constructor(id,name,salary){
        this.id = id ;
        this.name = name ;
        this.salary = salary ;
    }

    printEmployeeIdS(){
            console.log(this.id) ;
    }

    CountOfEmployees(){
        return this.id.length ;
    }

    NameOfEmployee(id){
        let index = 0 ;
        this.id.forEach(id_1 =>{
            if(id===id_1){
                console.log(`hello ${this.name[index]}`);
            }
            index++ ;
        }) ;
    }

    StoringSalaries(){
        let salary = [] ;
        this.salary.forEach(amount =>{
            salary.push(amount) ;
        }) ;
        return salary ;
    }

    AverageSalaryOfCompany(){
        let total = 0 ;
        this.salary.forEach(salaries =>{
            total += salaries ;
        })
        return total / this.salary.length ;
    }
}


let emp = new EmployeeRecords([67, 48, 29],["Hitanshu", "Ninad", "Amandeep"],[75000, 82000, 98000 ]) ;

emp.printEmployeeIdS() ;
console.log(emp.CountOfEmployees());
emp.NameOfEmployee(67);
console.log(emp.StoringSalaries());
console.log(emp.AverageSalaryOfCompany()); ;
// Print an array of all employee ids