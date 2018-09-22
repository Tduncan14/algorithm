// Finding the longest word with a for loop

function findLongestWord(str){
    // split the word into array
    var splitWord = str.split(" ");
    console.log(splitWord);

    // Intiaite a variable that hold the length of the world
    var longestWord = 0;

    // for some reason it only looping once; because i had the return in the wrong scope
    // Step 3. Create a for loop
    for(var i = 0; i < splitWord.length; i++){
        if(splitWord[i].length > longestWord){

           var counter = 0;
            counter ++;
            console.log(counter);
            
        // if the word is longer than the longest word
        // reassign the longest word to it {
            console.log(splitWord[i]);
            longestWord = splitWord[i].length; // longestWord has been assigned the  the true condition statement or the longest i world
        }
        console.log(longestWord);
     
    }
    return longestWord;
}

findLongestWord("this should be an working example treek");

