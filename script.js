const max=prompt("Enter the max Number");
console.log(max);

let random = Math.floor(Math.random() * max)+1;

let guess=prompt("Guess the Number");

while(true){
    if(guess=="quit"){
        console.log("User Quit");
        break;
    }
    if(guess == random){
       console.log("You are right! Congrats!"); 
    }else{
        guess=prompt("Your Guess was wrong.Please try again.");
    }
}