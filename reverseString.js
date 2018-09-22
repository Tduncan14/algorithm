// reverse the string algorithim

function reverseString(str){
    // splits the string up and pushes it into a array
    var str ;
     var splitString = str.split("");

     console.log("work");
     //console.log(splitString);

      // attaches the reverses method to splitString// that reverse the string letters
     var reverseString = splitString.reverse();

     console.log(reverseString);

        /// attaches a method to  previously variable and keeps the method inside
     var join = reverseString.join("");

     // assign the value of join to  str

            str = join;

            console.log(str);
 
     // the solution being return
     return str

     

}

// excuting the function
reverseString('treek');