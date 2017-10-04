    var age = Number(prompt('What is your age?'));

    //check if age is negative
    if (age < 0){
        console.log("where do you think you are going come back here");
    }

    // checks if age is 21
    if (age === 21){
        console.log("Happy 21st Birthday!!!");
    }

    //check if it's odd
    if(age % 2 !== 0){
        console.log("age is odd!");
    }

    // check if age is a perfert square
    if(age % Math.sqrt(age) == 0){
        console.log("Your age is a perferct square!");
    }