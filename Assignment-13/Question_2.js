/**
 * 2. Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.
Sample Input:
let students = [
{ name: "John", marks: “92” },
{ name: "Oliver", marks: “85” },
{ name: "Michael", marks: “79” },
{ name: "Dwight", marks: “95”},
{ name: "Oscar", marks: “64” },
{ name: "Kevin", marks: “48” },
];
Output:

{
'A': [ { name: "John", grade: “A” },
{ name: "Dwight", grade: “A” } ],
'B': [ { name: "Oliver", grade: “B” } ],
'C': [ { name: "Michael", grade: “C” } ],
'D': [ { name: "Oscar", grade: “D” } ],
'E': [ ],
'F': [ { name: "Kevin", grade: “F” } ],
}
 */

class Grades{
    constructor(array){
        this.array = array ;
    }
    // Calculate grades on basis of marks
    gradesCalculation(marks){
        let grade ;
        if(marks>90)grade = 'A';
        else if(marks>80) grade = 'B' ;
        else if(marks>70) grade = 'C' ;
        else if(marks>60) grade = 'D' ;
        else if(marks>50) grade = 'E' ;
        else grade = 'F' ;
        return grade ;
    }

    // Map the grades of each student
    mappingGrades(){
        let i = 0 ;
        let newArray = new Array() ;
        this.array.forEach(element => {
            let grades = this.gradesCalculation(element.marks) ;
            let obj = {
            } ;
            obj.name = element.name ;
            obj.grade = grades ;
            newArray.push(obj) ;
        });
        return newArray ;
    }

    // Group students according to the grades they have received and display.
    Grouping(newArray){
        let i = 0 ;
            let listofA = newArray.filter( element => { 
                if(element.grade === 'A') 
                    return element ;
                }
            ) ;
            let listofB = newArray.filter(element => {
                if(element.grade === 'B')
                    return element ;
            } ) ;
            let listofC = newArray.filter(element =>{
                if(element.grade === 'C')
                    return element ;
            }) ;
            let listofD = newArray.filter(element =>{
                if(element.grade === 'D')
                    return element ;
            }) ;
            let listofE = newArray.filter(element =>{
                if(element.grade === 'E')
                    return element ;
            }) ;
            let listofF = newArray.filter(element =>{
                if(element.grade === 'F')
                    return element ;
            }) ;
            return [listofA,listofB,listofC,listofD,listofE,listofF] ;
    }
}

let grades = new Grades([
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95},
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 },
    ]) ;

    var mappedGrades = grades.mappingGrades() ;
    // console.log(mappedGrades) ;
    var groupingGrades = grades.Grouping(mappedGrades) ;
    console.log(`Displaying all the students according to their grade`) ;
    console.log(groupingGrades) ;