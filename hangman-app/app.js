const puzzlEl = document.querySelector('#puzzel')
const guessesEl = document.querySelector('#remaining-guess')
const statusEl = document.querySelector('#status')
let game1 

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    const puzzle = game1.getPuzzel();
    const puzzleArray = puzzle.split('');

    // Convert each letter into a span element
    const puzzleHTML = puzzleArray.map(letter => {
        return `<span>${letter}</span>`;
    }).join('');

    // Update the puzzle element
    puzzlEl.innerHTML = puzzleHTML;
    console.log(game1.guess)

    // Update the remaining guesses and game status
    guessesEl.textContent = game1.message();
};

document.querySelector('#reset').addEventListener('click',() => {
   startGame()
})
const startGame = async () => {
    const puzzle = await puzzlepro('2')
    game1 = new Hangman(puzzle,5)
    render()
}

startGame()