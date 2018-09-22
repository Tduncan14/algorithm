//factorizing a number function

function factorize(num) {
    // if num == 0 or num == 1. it will return 
    if(num === 0 || num === 1){
        console.log(1);
        return 1;
    }
    // start the for loop with i == 4
    // then you count backwards from there

    for(var i = num - 1; i > 1; i--){

        num = num * i // also num *=  i is just fine for a solution as well

    }

    console.log(num);
  return num

}

 factorize(0);
 
 