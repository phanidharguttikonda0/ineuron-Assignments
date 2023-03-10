/**
 * Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
 */

function loop()
{
    let k = 1 ;
    for(let i = 1 ; i < 5 ; i++ )
    {
        let element = '' ;
        for(let j = 0 ; j < i ; j++ )
        {
            element += k+' ' ;
            k++ ;
        }
        console.log(element) ;
    }
}

loop() ;