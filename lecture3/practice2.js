/* Create a game where you start with any random game number . Ask the user to keep guessing the number until the user enters correct value */

/*
let gameNum = 25;
let num = prompt("Guess a correct game number")
console.log(num)
if(gameNum==numb)
    {
        console.log("true");
        prompt("true");
    }
else{
    console.log("false");
    console.log("Try Again");
    prompt("False,Try Again"); 
}
*/
let gameNum = 10;
let userNum = prompt("Guess the game number :");
console.log(userNum);
while(userNum != gameNum)
    {
        userNum = prompt("You enter wrong number. Guess Again :");
    }
    prompt(gameNum,"congratulation !!! you guess the correct number")
console.log(gameNum,"congratulation !!! you guess the correct number")