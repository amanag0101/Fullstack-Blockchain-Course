// Program to find the factorial of a number.

// Function to find the factorial of a number.
const factorial = (num) => {
    if(num === 0 || num === 1)
        return 1;

    return num * factorial(num - 1);
}

// Main
const number_inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number_inputs.forEach(num => console.log(`${num}! = ${factorial(num)}`))