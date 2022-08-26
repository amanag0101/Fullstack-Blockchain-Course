// Program to find the factorial of all prime numbers between a given range

// function to check if a number is prime.
const isPrime = (n) => {
    if(n <= 1)
        return false;

    for(let i = 2; i <= n/2; i++)
        if(n % i === 0)
            return false;

    return true;
}

// function to find the factorial in a given range
const factorial = (num) => {
    if(num === 0 || num === 1)
        return 1;

    return num * factorial(num - 1);
}

// Main
const range_inputs = [[0, 50], [50, 100], [100, 150]];
range_inputs.forEach(range => {     
    for(let i = range[0]; i <= range[1]; i++)
        if(isPrime(i))
            console.log(`${i}! = ${factorial(i)}`);
});