//global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btn__reset = document.getElementById('start');

const ul = phrase.firstElementChild;
const li = ul.children;   // letters in the phrase
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
function addPhraseToDisplay(arr) {
    // loop through array of characters
    for (const char of arr) {
      const letter = arr[char];
      // For each character, create a list item
      const item = document.createElement('li');
      // Put each character inside the list item
      item.textContent = letter;
  
      // Add the appropriate class to the list items
      if (char !== " ") {
        item.className = 'letter';
      } else {
        item.className = 'space';
      }
  
      // Append the list item to the DOM(#phrase ul)
      ul.appendChild(item);
    }
  }

addPhraseToDisplay(splitRandomPhrase);

//check if a letter is in the phrase
const checkLetter = (buttonClicked) => { 
  for(let i = 0; i < li.length; i++) {
    //a letter is chosen
    if(li[i].classList.contains('letter')) {
        //check textContent to see if there's a match
        if(li[i].textContent === buttonClicked) {
            //add 'show' class
            li[i].classList.add('show');
            //save the correct guess
            letterFound = buttonClicked;
        }
    }
  }
  //return matching letter; if not, return null for incorrect
  return letterFound;
}

//targets button clicked then changs it to different color

//check if the game has been won or lost
const checkWin = () => {
    // Initialize the counters
    // Counter 1 - 'show' class:
    const listItemArray = document.querySelector('ul').children;
  
    let counterShow = 0;
    for (let i = 0; i < listItemArray.length; i++) {
      // check for the 'show' class
      if(listItemArray[i].classList.contains('show')) {
        counterShow += 1;
      }
    }
  
  // Counter 2 - 'letter' class:
    let counterLetters = 0;
    for (let i = 0; i < listItemArray.length; i++) {
      // count the number of letters (exclude spaces) in the phrase
      if(listItemArray[i].classList.contains('letter')) {
        counterLetters += 1;
      }
    }
    // console.log(guessesMissed);
  
      // Check for a win
      if ( counterShow === counterLetters ) {
  
        // Wait for the animation to complete
        setTimeout(function(){
          // Display win overlay
          overlay.style.display = 'flex';
          overlay.classList.add('win');
          overlay.appendChild(win);
        }, 2000);
  
  
      } else {
          // keep playing
          // console.log('checking to see if you won...');
          // console.log(guessesMissed);
  
            if ( guessesMissed < 5 ) {
                // keep playing
                // console.log('letters shown: ' + counterShow);
                // console.log('letters in phrase: ' + counterLetters);
  
            } else if (guessesMissed === 5) {
  
              // Give animation time to finish
              // Disable the rest of the buttons in meantime
              const buttons = document.querySelectorAll('#qwerty button');
              for (let i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('disabled', '');
              }
  
              setTimeout(function(){
                // Otherwise, if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class
                overlay.style.display = 'flex';
                overlay.classList.add('lose');
                overlay.appendChild(lose);
              }, 2000);
  
            }
      }
  }

//listen for the start game button to be pressed
btn__reset.addEventListener('click', () => {
    overlay.style.display = 'none';
})

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', function(evt){

    if (evt.target.tagName === 'BUTTON') {
      let character = evt.target.textContent;
      evt.target.setAttribute('disabled', '');
      evt.target.classList.add('chosen');
      checkLetter(character);
      if (letterFound === character) {
        // console.log('good job!');
        checkWin();
      } else {
        // remove a try
        // 1: increment the guessesMissed variable
        guessesMissed++;
  
        // 2: update the DOM - remove a try
        const scoreboard = document.querySelector('#scoreboard').firstElementChild;
  
        // get all list items with class 'tries'
        const tries = document.querySelectorAll('.tries');
        scoreboard.removeChild( tries[0] );
  
        checkWin();
      }
    }
  
  });

const reload = () => {
    window.location.reload();
}