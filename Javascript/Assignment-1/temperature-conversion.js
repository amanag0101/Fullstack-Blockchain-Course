// Program to convert temperatures to Fahrenheit and Celsius.

// Function to convert temperature from Fahrenheit to Celsius.
const convertFahrenheitToCelcius = (temperature) => {
    return (temperature - 32) / 1.8;
}

// Function to convert temperature from Celsius to Fahrenheit.
const convertCelciusToFahrenheit = (temperature) => {
    return (temperature * 1.8) + 32;
}

// Main
const fahrenheit_inputs = [77, 86, 91.4, 95, 104];
const celcius_inputs = [25, 30, 33, 35, 40];

console.log("\nConverting Fahrenheit to Celsius");
fahrenheit_inputs.forEach(temperature => 
    console.log(`${temperature} F = ${convertFahrenheitToCelcius(temperature)} C`));

console.log("\nConverting Celsius to Fahrenheit");
celcius_inputs.forEach(temperature => 
    console.log(`${temperature} C = ${convertCelciusToFahrenheit(temperature)} F`));

