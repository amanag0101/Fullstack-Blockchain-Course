// Program to find the sum of the multiples of 3 and 5 under 1000

// function to find the sum of multiples of 3 and 5
const getSumofMultiplesofThreenAndFive = () => {
    return getSumOfMultiplesOf3() + getSumOfMultiplesOf5() - getSumOfMultiplesOf15();
}

// function to find the multiples of 3
const getSumOfMultiplesOf3 = () => {
    const a = 3;
    const l = 999;
    const n = l / a;
    return (n / 2) * (a + l);
}

// function to find the multiples of 5
const getSumOfMultiplesOf5 = () => {
    const a = 5;
    const l = 995;
    const n = l / a;
    return (n / 2) * (a + l);
}

// function to find the multiples of 15
const getSumOfMultiplesOf15 = () => {
    const a = 15;
    const l = 990;
    const n = l / a;
    return (n / 2) * (a + l);
}

// Main
console.log(getSumofMultiplesofThreenAndFive());
