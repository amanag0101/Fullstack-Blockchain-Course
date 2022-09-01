// Program to find the largest number in an array

// Function to find the largest number in an array
function findLargest(arr) {
    let largestNumber = arr[0];
    
    arr.forEach(n => {
        if(n > largestNumber)
            largestNumber = n;
    });

    return largestNumber;
}

// Main
const arr = [3,45,6,7,23,5,7,8]
console.log(findLargest(arr));