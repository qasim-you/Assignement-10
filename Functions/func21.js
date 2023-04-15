// 21. Write a js program to find factorial of numbers using function.
let num= 3;
function findFactorial(n){
    let temp=1;
    for (let i= n; i>=1; i--){
     temp= temp* i
    } return temp
}
console.log(findFactorial(num));
