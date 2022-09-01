// Create a function that takes a number (step) as an argument and returns the 
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Function to get number of matchsticks required in a step
function getNumberOfMatchsticks(step) {
    if(step === 1)
        return 6;
    else return (step * 6) - (step - 1);
}

// main
const step_inputs = [1, 2, 100, 4, 87];
step_inputs.forEach(step => console.log(`Matchsticks required in ${step} step(s) = ${getNumberOfMatchsticks(step)}`));