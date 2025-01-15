// NUMBER GUESSING GAME --- 02:40:50

const minNum = 1;
const maxNum = 100;
// math.floor to get the integer number
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 

let attemps = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)
    // console.log(typeof guess, guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    } else if (guess < minNum || guess >maxNum) {
        window.alert("Please enter a valid number")
    } else {
        attemps++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        } else if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        } else {
            window.alert(`CORRECT! the answer was ${answer}. It took you ${attemps} attemps`);
            running = false;
        }
    }
    
    
}