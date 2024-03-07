/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    // Add code here
    // loop studentlist and print each student name
    for (let s of studentList) {
        console.log(s);
    }
    //for (let i = 0; i < studentList.length; i++) {
    //    console.log(studentList[i]);
    //}
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}