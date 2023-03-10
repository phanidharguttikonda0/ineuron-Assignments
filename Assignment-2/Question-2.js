/**
Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.

 */

function Grade( marks)
{
    switch(true)
    {
        case (marks>=90 && marks<=100) : return 'S' ;
        case (marks>=80 && marks<90) : return 'A' ;
        case (marks>=70 && marks<80) : return 'B' ;
        case (marks>=60 && marks<70) : return 'C' ;
        case (marks>=50 && marks<60) : return 'D' ;
        case (marks>=40 && marks<50) : return 'E' ;
        case (marks>=0 && marks<40) : return 'fail' ;
        default : return 'Invalid Marks' ;
    }
}

console.log(`For the given marks the grade is  ${Grade(90)}`) ;