 // A-LAB Part 1
 
 //Loop through all numbers from 1-100
 for (let x = 1; x <= 100; x++) {

    //If a number is divisible by 3 and 5, FizzBuzz is displayed
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz");
    }

      //If a number is divisible by 3, Fizz is displayed
      else if (x % 3 == 0) { 
            console.log("Fizz.");
      }
       
        //If a number is divisible by 5, Buzz is displayed
       else if (x % 5 == 0) {
            console.log("Buzz.")
       }

       //If number is NOT divisible by 3 or 5
        else
   console.log(x);
   }

//A-LAB Part 2 - Finding prime numbers
   
for (let n = 1; n <= 50; n++){
    let isPrimeNum = true;

    // looping through 2 to number/2
        for (let i = 2; i <= (n - 1); i++) {
            if (n % i === 0) {
            isPrimeNum = false;
            break;
            }
        }

    if (isPrimeNum === true) {
        console.log(`${n} is a prime number`);
    }
}

//R-LAB Part 2/3

const csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const eachRow = csvData.split("\n"); // Split the string into rows
const header = eachRow[0].split(",");  // Extract the header row
const arrData = [];

    for (let i = 1; i < eachRow.length; i++) {
        const newRow = eachRow[i].split(",");

          const rowObj = {};
            for (let j = 0; j < header.length; j++) {
                rowObj[header[j]] = newRow[j];
             }

  arrData.push(rowObj);
}
console.log(arrData);

// R-LAB Part 4.1 Remove the last element from the sorted data
let newArrData = arrData.pop();
console.log(newArrData);

// R-LAB Part 4.2 Insert Object at Index 1
let newIndex = arrData.splice(0, 4, '48', 'Barry', 'Runner', '25');
console.log(newIndex);

// R-LAB Part 4.3 Push an object to the end of an array
let newObject = arrData.push('7', 'Bilbo', 'None', '111');
console.log(newObject);

//R-LAB Part 4.4 Computing Average age
function avgAge{
    let total = []
    for (let a = 0; a < rowObj[0].length; a++)
}


