// algoritim 2

function reverseString(str){
//step one create an empty string that will host a new string
var newString ="";

// create the for loop
// the starting point of the loop will be (str.length-1) which corresponds to the
// last character of the string "o"
// as long as i is greater than or equals 0, the loop will go on
// We decrement i after each iteration */

for(var i = str.length -1; i > 0 ; i--){
newString += str[i]; // or newString = newString + str[i];

/* here is the background
For each iteration: i = str.length -1 and newString = newString + str[i]
  First iteration: i  =(5-1) = 4  newString ="" + "o"
  Second iteration: i =(4-1) = 3 newString ="o"+"l"
  third irteration : i = (3-1) = 2 newString ="ol" +"l"
  two iteration: i =(2-1) = 1 newString ="oll" + "e";
  one iteration: i = (1 -1) =0 newString= "olle" "h";
  for example
*/
  return newString ;

}

}

// 