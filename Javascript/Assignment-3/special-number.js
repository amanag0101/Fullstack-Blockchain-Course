// Program to find whether a given number is special number or not

// function to find the factorial in a given range
const factorial = (num) => {
    if(num === 0 || num === 1)
        return 1;

    return num * factorial(num - 1);
}

// function to check if an number is special or not
const isSpecialNumber = (num) => {
    let sum = 0;
    let temp = num;

    while(temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = parseInt(temp / 10);
    }

    return sum === num ? true : false;
}

// Main
const number_inputs = [20, 1, 12, 18, 370, 145];
number_inputs.map(num => 
    isSpecialNumber(num) 
        ? console.log(`${num} is an Special Number.`) 
        : console.log(`${num} is not an Special Number.`));