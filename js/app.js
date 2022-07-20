//global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btn__reset = document.getElementById('start');
const getRandomColor = document.getElementsByTagName('button');

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
let letterFound = 0;

const win = document.createElement('p');
win.classList.add('message');
win.textContent = 'Congratulations!';

const lose = document.createElement('p');
lose.classList.add('message');
lose.textContent = 'You Lost. Play again?';

// let missed, letterFound;

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
      const letter = char;
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
  // console.log('you clicked a button, yay!');
  for(let i = 0; i < li.length; i++) {
    //a letter is chosen
    if(li[i].classList.contains('letter')) {
        //check textContent to see if there's a match
        // console.log(li[i].textContent);
        if(li[i].textContent === buttonClicked) {
          // console.log('you are right! A green button should show now');
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

//targets button clicked then changes it to different color

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
    // console.log(missed);
  
      // Check for a win
      if ( counterShow === counterLetters ) {
  
        // Wait for the animation to complete
        setTimeout(function(){
          // Display win overlay
          overlay.style.display = 'flex';
          overlay.classList.add('win');
          overlay.appendChild(win);
        }, 700);
  
  
      } else {
          // keep playing
          // console.log('checking to see if you won...');
  
            if ( missed < 5 ) {
                // keep playing
                // console.log('letters shown: ' + counterShow);
                // console.log('letters in phrase: ' + counterLetters);
  
            } else if (missed === 5) {
  
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
                btn__reset.textContent = 'Try Again';
                btn__reset.style.backgroundColor = 'white';
                btn__reset.style.color = 'black';
              }, 700);
  
            }
      }
  }

//listen for the start game button to be pressed
btn__reset.addEventListener('click', () => {
    // overlay.style.display = 'none';
    if (overlay.className === 'start') {
      // 1: Start
      overlay.classList.remove('start');
      overlay.style.display = 'none';
    } else if (overlay.className === 'win') {
      // 2: Win
      overlay.removeChild(win);
      overlay.classList.remove('win');
      overlay.style.display = 'none';
    } else if (overlay.className === 'lose') {
      // 3: Lose
      overlay.removeChild(lose);
      overlay.classList.remove('lose');
      overlay.style.display = 'none';
    }
    // Initialize the game
    init();
})

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', function(evt){

    if (evt.target.tagName === 'BUTTON') {
      let character = evt.target.textContent;
      evt.target.setAttribute('disabled', '');
      evt.target.classList.add('chosen');
      checkLetter(character);
      if (letterFound === character) {
        // console.log(`${letterFound}`);
        checkWin();
      } else {
        // remove a try
        // 1: increment the missed variable
        missed++;
  
        // 2: update the DOM - remove a try
        const scoreboard = document.querySelector('#scoreboard').firstElementChild;
  
        // get all list items with class 'tries'
        const tries = document.querySelectorAll('.tries');
        scoreboard.removeChild(tries[0]);
  
        checkWin();
      }
    }
  
  });

  function init() {
    missed = 0;
    // reset hearts
    const scoreboard = document.querySelector('#scoreboard').firstElementChild;
    const old = document.querySelectorAll('.tries');
    // clear screen
    for (let i = 0; i < old.length; i++) {
      scoreboard.removeChild(old[i]);
    }
  
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    listItem.classList.add('tries');
    img.style.repeat = 'norepeat';
    img.src = "images/liveHeart.png";
    listItem.appendChild(img);
  
    for (let i = 0; i < 5; i++) {
      scoreboard.appendChild(listItem.cloneNode(true));
    }
  
    // Reset the keyboard
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++){
      buttons[i].removeAttribute('disabled');
      buttons[i].removeAttribute('class', 'chosen');
    }
  
    // Remove the old phrase
    const oldLetters = ul.querySelectorAll('li');
    // Clear old phrase from screen
    for (let i = 0; i < oldLetters.length; i++) {
      ul.removeChild( oldLetters[i] );
    }

    // Generate a random phrase from the array and save the result
    let currentPhraseChar = getRandomPhraseArray(phrasesList);
    // Call the function to add the new random phrase to the DOM
    addPhraseToDisplay(currentPhraseChar);

  }

const reload = () => {
    window.location.reload();
}