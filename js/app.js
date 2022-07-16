const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btn__reset = document.getElementById('start');
const phrasesList = [
    'it do be like that sometimes',
    'only on wednesdays',
    'peaky blinders',
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
    let randomArray = arr[randomNumber()];
    return splitArray = randomArray.split([,]);
}

const splitRandomPhrase = getRandomPhraseArray(phrasesList); //array of letters gets captured by a variable

//adds the letters of a string to the display
const addPhraseToDisplay = (arr) => {
     // loop through array of characters
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    // For each character, create a list item
    const item = document.createElement('li');
    // Put each character inside the list item
    item.textContent = letter;

    // Add the appropriate class to the list items
    if (letter !== " ") {
      item.className = 'letter';
    } else {
      item.className = 'space';
    }

    // Append the list item to the DOM (specifically to the #phrase ul )
    ul.appendChild(item);
  }
}

//check if a letter is in the phrase
const checkLetter = (buttonClicked) => { //Removes
      // Loop through the characters in the phrase
  for (let i = 0; i < li.length; i++) {
    // Make sure a letter is chosen
    if ( li[i].classList.contains('letter') ) {

        // Check the textContent of the button to see if there's a match
        if (li[i].textContent === guessBtn) {
          // Add the 'show' class
          li[i].classList.add('show');
          // Save the correct guess
          letterFound = guessBtn;
        }
    }
  }
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