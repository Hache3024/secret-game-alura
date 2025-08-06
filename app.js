/**
 * We use document.querySelector to create a connection with the elements in the class .html with the .js.
 *
 */
let secretNumber;
let chancesCounter = 1;
let sortedNumberList = [];
let range = 10;
reloadGame();

/**
 * getElementById, it returns an assigned value in an input box and .value returns the value.
 */

function verifyAndCompare() {
    let userNumber = parseInt(document.getElementById('userNumber').value);
    console.log(secretNumber);
    if(userNumber == secretNumber){
        assignTextElement('p', `You guessed the number in ${chancesCounter} ${chancesCounter == 1 ? "chance" : "chances"}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(userNumber > secretNumber){
            assignTextElement('p', "Your number is higher!");
        } else {
            assignTextElement('p', "Your number is lower!");
        }
        chancesCounter++
        clearField();
    }

}

function generateRandomNumber(range){
    let number = Math.floor(Math.random()*range) + 1;
    if(sortedNumberList.length == range){
        assignTextElement('p','It has already been generated every possible number in the range!');
    } else{
        if(sortedNumberList.includes(number)){ // Includes validates if exist an element inside the array. If it isn't, returns false.
            return generateRandomNumber(range);
        } else {
            sortedNumberList.push(number);
            return number;
        }
    }
}

function assignTextElement(element, text){
    let elementHTML = document.querySelector(element);

    elementHTML.innerHTML = text;
}

function clearField(){
    document.querySelector('#userNumber').value = '';
}

function initialConditions(){
    assignTextElement('h1', "Secret Number Game!");
    assignTextElement('p', `Enter a number between 1 and ${range}:`);
    secretNumber = generateRandomNumber(range);
}

function reloadGame(){
    clearField();
    initialConditions();
    chancesCounter = 1;
}


