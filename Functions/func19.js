// 19. Write a js program to generate nth Fibonacci term using function.

function fibonacci(num) {
    let firstNum = 0;     
    console.log(firstNum);
    if (num == 0) {
        return
    }
    let secondNum = 1;   
    console.log(secondNum);
    if (num == 1) {
        return
    }
    for (let index = 2; index < num; index++) {
        let thirdNumber = firstNum + secondNum;
        console.log(" " + thirdNumber); 
        firstNum = secondNum;
        secondNum = thirdNumber;
    }
}
fibonacci(5);
console.log(fibonacci(9));

