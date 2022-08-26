// Program to find the grade of a student based on marks obtained

// function to find the grade of the student
function getGrade(marks) {
    if(marks > 90 && marks <= 100)
        return "S";
    else if(marks > 80 && marks <= 90)
        return "A";
    else if(marks > 70 && marks <= 80)
        return "B";
    else if(marks > 60 && marks <= 70)
        return "C";
    else if(marks > 50 && marks <= 60)
        return "D";
    else if(marks > 40 && marks <= 50)
        return "E";
    else if(marks >= 0 && marks <= 40)
        return "Fail";
    else 
        return "Invalid marks";
}

// Main
const marks_input = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
marks_input.forEach(marks => console.log(getGrade(marks)));