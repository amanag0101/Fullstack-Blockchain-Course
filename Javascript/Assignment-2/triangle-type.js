// Program to check whether a triangle is equilateral,isosceles or scalene

// Function to get the type of the triangle
const getTriangleType = (sideA, sideB, sideC) => {
    if(sideA === sideB && sideA === sideC)
        return "Equilateral Triangle";
    else if(sideA === sideB || sideA === sideC || sideB === sideC)
        return "Isosceles Triangle";
    else 
        return "Scalene Triangle";
}

// Main
const triangle_inputs = [[10, 10, 10], [10, 11, 12], [1, 2, 1], [1, 2, -2], [2, 2, 2], [-10, 10, -10]];
triangle_inputs.forEach(triangle => console.log(getTriangleType(triangle[0], triangle[1], triangle[2])));