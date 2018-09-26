//  Finding the  largest number in the arrays



function largestOfFour(arr) {

    // Step 1. Create an array that will host the result of the 4 sub arrays
    var largestNumbers = [0,0,0,0];


    // Step 2. Create the first For loop that will iterate through the arrays
    for(var i = 0; i < arr.length; i++){
        /* The starting point, index 0, corresponds to the first sub- array */
    
        console.log("is the number getting to here");
    // Step 3. Create the second For loop that will iterate through the sub -array
     for(var j = 0; j < arr[i].length; j++) {
         /* the starting point, index 0 , corresponds to the first sub -array */
          
         if(arr[i][j] > largestNumbers[i]){
           // reassigning the largestNumber value to array[i][j] value
            console.log()
           largestNumbers[i] = arr[i][j];
         }

        }
    }
    console.log(largestNumbers);
    return largestNumbers
}

  largestOfFour([[44,45,78,9],[22,89,90,15],[80,28,39,45],[1,2,4,5]]);
  