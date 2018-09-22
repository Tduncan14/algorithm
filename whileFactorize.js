// factorize with a while loop

function factor(num){
    // create a variable result to store num;
    var result = num;

    // if num = 0 or num = 1 , the factorial will return 1
    if(num === 0 || num === 1) {
        return 1;
    }
    // now it is time to create the while loop
    while(num > 1){
        num --; // decremenation by 1 each iteration or each loop
        result = result *num ; // also result *= num works too

        // 1st loop = 5
        // 2nd loop = 5 *4
        // 3 loop = 5*4*3
        // 4th loop = 5*4 *3 * 2
        // 5th loop = 5 *4*3*2*1
        // the while loops ends and you should get the number you looking for



    }
    console.log(result);
     return result;
}


factor(5);