// Program to find whether a given year is a leap year or not.

// Function to check if a number is leap year or not.
const isLeapYear = (year) => {
    if(year % 400 === 0)
        return true;
    else if(year % 4 === 0 && year % 100 !== 0)
        return true;
    else 
        return false;
}

// Main
const year_inputs = [1900, 1992, 2012, 2020, 2100, 2200, 2620];
year_inputs.forEach(year => {
    if(isLeapYear(year))
        console.log(`${year} is a leap year.`);
    else 
        console.log(`${year} is not a leap year.`);
});