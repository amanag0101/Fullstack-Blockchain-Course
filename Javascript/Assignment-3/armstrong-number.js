// Program to check if a number is armstrong number.

//  function to check if a number is armstrong number
const isArmstrongNumber = (num) => {
    let sumOfDigits = 0;
    let temp = num;

    while(temp > 0) {
        let digit = temp % 10;
        sumOfDigits += (digit * digit * digit);
        temp = parseInt(temp / 10);
    }

    return (sumOfDigits === num) ? true : false;
}

// Main
const number_inputs = [0, 1, 12, 153, 370, 371, 120, 407, 500];
number_inputs.map(num => 
    isArmstrongNumber(num) 
        ? console.log(`${num} is an Armstrong Number.`) 
        : console.log(`${num} is not an Armstrong Number.`));