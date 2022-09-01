// Program which accept a number as input in the function parameter 
// and insert dashes (-) between each two even numbers.

// Function to insert dash
function insertDash(numberString) {
    let result = "";
    let isLastDigitEven = false;

    for(let char of numberString) {
        let digit = Number.parseInt(char);

        if(digit % 2 === 0 && isLastDigitEven)
            result = result + "-" + digit;
        else {
            isLastDigitEven = digit % 2 === 0;
            result = result + digit;
        }
    }

    return result;
}

// Main
let number_inputs = ["025468", "24680", "13579", "0213568720"];
number_inputs.forEach(input => console.log(insertDash(input)));