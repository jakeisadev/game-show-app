const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btn__reset = document.getElementById('start');
const randomNumber = () => Math.floor(Math.random() * 5);
const phrasesList = [
    'it do be like that sometimes',
    'only on wednesdays',
    'peaky blinders',
    'code geass',
    'hunter x hunter'
];
let missed = 0;

//return a random phrase from an array
const getRandomPhraseArray = arr => {
    let randomArray = arr[randomNumber()];
    return splitArray = randomArray.split([,]);
}

const splitRandomPhrase = getRandomPhraseArray(phrasesList); //array of letters gets captured by a variable

//adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

//check if a letter is in the phrase
const checkLetter = () => {

}

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