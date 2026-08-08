let max=prompt("enter the max number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the random number");
while(true){
    if(guess=="quit"){
        console.log("you quit!");
        break;
    }
    else if(guess==random){
        console.log("you are right !! random number was",random);
        break;
    }
    else{
        guess=prompt("your guess is wrong , please try again");
    }
   
}

