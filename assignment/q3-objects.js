/*
    Task:
    You are to convert the given two arrays (bookIdArr & bookTitle) into an object (booksObj) with four key value pairs:
    - NLB1 -> Lord of the Rings
    - NLB2 -> Programming for Dummies
    - NLB3 -> Introduction to Software Testing
    - NLB4 -> How to be a Software Developer

    Tips: 
    - Use a for loop and utilizes the index variable as a running number.
    - Be sure got use google!
*/

const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];
let booksObj = {}; 

function convert(keyArr, valueArr){
    // check if the keyArr and valueArr are of the same length
    if(keyArr.length !== valueArr.length) {
        return "The keyArr and valueArr are not of the same length";
    }

    for (let i = 0; i < keyArr.length; i++) {
        booksObj[keyArr[i]] = valueArr[i];
    }

    return booksObj;
    // Add code here
    /*
        Tips:
        - Step 1: Create a local scoped object literal.
        - Step 2: Define a for-loop that run based on keyArr's length.
        - Step 3: Within the for-loop, add the key and value to the local scoped object.
        - Step 4: Write a return statement to return the object literal after the for-loop code block.
    */
}

function printByKey(key){
    console.log(booksObj[key]);
}

booksObj = convert(bookIdArr, bookTitle);
printByKey("NLB2"); // prints "Progamming for Dummies"

// Ignore the code below this line
module.exports = {
    convert
}