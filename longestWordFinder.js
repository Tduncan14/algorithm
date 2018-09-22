// Finding the longest word with a for loop

function findLongestWord(str){
    // split the word into array
    var splitWord = str.split(" ");

    // Intiaite a variable that hold the length of the world
    var longestWord = 0;

    // Step 3. Create a for loop
    for(var i = 0; i < strSplit.length ; i++){
        if(splitWord[i].length > longestWord){
        // if the word is longer than the longest word
        // reassign the longest word to it {
            longestWord = splitWord[i].length; // longestWord has been assigned the  the true condition statement or the longest i world
        }
        return longestWord;
    }
}

findLongestWord("this should be an working example treek");