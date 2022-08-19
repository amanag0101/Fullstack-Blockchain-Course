// Program to convert temperatures to Fahrenheit and Celsius.

// Function to convert temperature from Fahrenheit to Celsius.
const convertFahrenheitToCelsius = (temperature) => {
    return (temperature - 32) / 1.8;
}

// Function to convert temperature from Celsius to Fahrenheit.
const convertCelsiusToFahrenheit = (temperature) => {
    return (temperature * 1.8) + 32;
}

// Main
const fahrenheit_inputs = [77, 86, 91.4, 95, 104];
const celsius_inputs = [25, 30, 33, 35, 40];

console.log("\nConverting Fahrenheit to Celsius");
fahrenheit_inputs.forEach(temperature => 
    console.log(`${temperature} F = ${convertFahrenheitToCelsius(temperature)} C`));

console.log("\nConverting Celsius to Fahrenheit");
celsius_inputs.forEach(temperature => 
    console.log(`${temperature} C = ${convertCelsiusToFahrenheit(temperature)} F`));
