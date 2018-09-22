// reverse the string algorithim

function reverseString(){
    // splits the string up and pushes it into a array
     var splitString = str.split();

     console.log(splitString);

      // attaches the reverses method to splitString// that reverse the string letters
     var reverseString = splitString.reverse();

     console.log(reverseString);

        /// attaches a method to  previously variable and keeps the method inside
     var join = reverseString.join("");

     // assign the value of join to  str

            str = join;
 
     // the solution being return
     return str

     

}

// excuting the function
reverseString('treek');