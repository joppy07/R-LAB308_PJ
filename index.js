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

       //If number is NOT divisible by 3 or 5g
        else
   console.log(x);
   }


   //for (let x = 1; x <= 100; x++) {


for (let x = 1; x <= 50; x++){
     let isNotPrime = false;
          for (let y = 2; y <= (x - 1); y ++){
               if (x % y === 0)
               {isNotPrime = true;}
          }
          if (isNotPrime === false)
          {console.log(x)}
}

