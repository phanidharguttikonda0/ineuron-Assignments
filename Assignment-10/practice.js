let array = new Array() ;

array.push(5) ;
array.push(4) ;
array.push(3) ;
array.push(2) ;
array.push(1) ;

array.filter(value =>{
if(value%2===0){
    console.log(value) ;
}
}) ;