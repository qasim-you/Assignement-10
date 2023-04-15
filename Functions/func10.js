// 10. Write a js program to find power of any number using function.
function power(base,exponent) {
    let result = 1;
    for (let index = 0; index < exponent; index++) {
         result *= base ; 
                
    }
    return result ;
}
console.log(power(2,5));
