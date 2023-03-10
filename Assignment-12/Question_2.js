/**
 * Write a program in JavaScript to map the student ids, names and scores.
a) Add data for 3 students (use map functions)
b) Get Student Names using map functions
c) Delete Student Scores using map functions

d) Display 1 parameter (only value), 2 parameters (value + key), and 3
parameters (value + key + map) for the student
Sample Input:
"id": [ 1, 2, 3 ]
"name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
"scores": [ 90, 88, 92 ]
Output:
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
-----one parameter-----
[ 1, 2, 3 ]
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
[ 90, 88, 92 ]
-----two parameter-----
id 1, 2, 3
name Hitanshu,Ninad,Amandeep
scores 90,88,92
-----three parameter-----
id 1, 2, 3
Map(3) {
'id' => [ 67, 48, 29 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
name Hitanshu,Ninad,Amandeep
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
scores 90,88,92
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
 */

class mapping 
{
    // add data for three students
    constructor(id,name,scores){
        this.map = new Map() ;
        this.map.set("id",id) ;
        this.map.set("names", name) ;
        this.map.set("scores", scores) ;
    }

    // Get Student Names using map functions
    getStudentNames(){
        return this.map.get("names") ;
    }

    // Delete Student Scores using map functions
    deletingScores(){
        this.map.delete("scores") ;
    }

    // Display 1 parameter (only value), 2 parameters (value + key), and 3
    // parameters (value + key + map) for the student
    display(value){
        if(value===1){
            console.log(this.map.get("id")) ;
            console.log(this.map.get("names"));
            console.log(this.map.get("scores"));
        }
        else if(value===2){
            let keys = this.map.keys() ;
            let values = this.map.values() ;
            let i = 0 ;
            while(this.map.size !== i){
                console.log(`${keys.next().value}  ${values.next().value}`) ;
                i++ ;
            }
        }
        else{
            let keys = this.map.keys() ;
            let values = this.map.values() ;
            let i = 0 ;
            while(this.map.size !== i){
                let key = keys.next().value ;
                console.log(`'${key}' => ${this.map.get(key)}`) ;
                i++ ;
            }
        }
    }
}

let map = new mapping([ 1, 2, 3 ],[ 'Hitanshu', 'Ninad', 'Amandeep' ]
,[ 90, 88, 92 ]) ;

console.log(map.getStudentNames() );
console.log('-------- First Parameter --------');
map.display(1) ;
console.log('------- Second Parameter -----');
map.display(2) ;
console.log('------- Third Parameter -------');
map.display(3) ;