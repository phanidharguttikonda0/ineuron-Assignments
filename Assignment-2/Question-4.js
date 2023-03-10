/**
 * 
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
 */

function primeFactorial(n1, n2, fact = 1, n) {
    /**
     * In this function we have done the Recursion as well 
     */
    if (n === undefined) {
        const arr = [];
        let isPrime = (i) =>
            {
                if(i>2)
                {
                    let j = true ;
                for(let k = 2 ; k <= Math.sqrt(i) ; k++ )
                {
                    if(i%k===0) {j = false ; break ;}
                }

                if(j) 
                {
                    arr.push(primeFactorial(n1,n2,i , 0)) ;
                }
                }
                else 
                {
                    arr.push(primeFactorial(n1,n2,i , 0)) ;
                }
            }
        for (let i = n1; i < n2; i++) {
            isPrime(i) ;
        }
        return arr ;
    }
    else 
    {
        if(fact===1) return 1 ;
        else return fact*(primeFactorial(n1,n2,fact-1,n)) ;
    }
}

console.log(`The Prime-Number's Factorial Number's from the given range is ${primeFactorial(1,30)}`) ;