/** /*
 * Write a JavaScript program to filter the hospitals according to:
 * a) Number of Beds > 200
 * b) Availability of Beds = Yes
 * c) Location = Pune
*/

let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    'availability': 'Yes'
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    'availability': 'NO'
    },
    {
    "id": 3,
    "name":"Hospital C",
    "location":"Pune",
    "noOfBeds":350,
    'availability': 'Yes'
    }]

//* a) Number of Beds > 200
function beds(){
    return hospitals.filter(element =>{
        if (element.noOfBeds > 200) return element 
    }) 
}

//* b) Availability of Beds = Yes
function availability(){
    return hospitals.filter(element =>{
        if(element.availability === 'Yes') return element 
    }) 
}

//* Location = Pune
function location(){
    return hospitals.filter(element =>{
        if(element.location === 'Pune') return element 
    })
}

console.log(beds())
console.log(availability())
console.log(location()) 