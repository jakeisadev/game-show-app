//global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btn__reset = document.getElementById('start');
const phrasesList = [
    'demon slayer',
    'attack on titan',
    'how a realist hero rebuilt the kingdom',
    'code geass',
    'hunter x hunter'
];
let missed = 0;

const win = document.createElement('p');
win.classList.add('message');
win.textContent = 'Congratulations!';

const lose = document.createElement('p');
lose.classList.add('message');
lose.textContent = 'You Lost. Play again?';

let guessesMissed, letterFound;

const randomNumber = () => Math.floor(Math.random() * 5);
//return a random phrase from an array
const getRandomPhraseArray = arr => {
    //sets randomArray to one of the phrases
    let randomArray = arr[randomNumber()];
    //splits the chosen array into separate letters and spaces for use
    return splitArray = randomArray.split([,]);
}

const splitRandomPhrase = getRandomPhraseArray(phrasesList); //array of letters gets captured by a variable

//adds the letters of a string to the display
const addPhraseToDisplay = (arr) => {
     // loop through array of characters
    for(let i = 0; i < arr.legnth; i++) {
        const letter = arr[i];
        //for each character, create a list item
        const item = document.createElement('li');
        //put each character inside the list item
        item.textContent = letter;
        //add appropriate class to each item
        if(letter !== '') {
            item.className = 'letter';
        } else {
            item.className = 'space';
        }
        //append the list item to the DOM(#phrase ul)
        ul.appendChild(item);
    }
}

//check if a letter is in the phrase
const checkLetter = (buttonClicked) => { 
  
}

//targets button clicked then changs it to different color

//check if the game has been won or lost
const checkWin = () => {

}

//listen for the start game button to be pressed
btn__reset.addEventListener('click', () => {
    overlay.style.display = 'none';
})

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', () => {

})

const reload = () => {
    window.location.reload();
}