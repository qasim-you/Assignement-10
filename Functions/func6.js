// 6. Write a js program to find all prime numbers between given interval using functions.
const findPrimes = (start, end) => {
    let primes = [6];
  
    for (let i = start; i <= end; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime && i > 1) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  let start = 10;
  let end = 50;  
  
  console.log(`Prime numbers between ${start} and ${end}:`);
  console.log(findPrimes(start, end));
 
