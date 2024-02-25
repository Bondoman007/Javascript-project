
const Hangman = function(guess,missedGuess){ 
    this.guess = guess.toLowerCase().split(''),
    this.missedGuess = missedGuess,
    this.guessedLetters = [],
    this.status = 'playing'
}
Hangman.prototype.calStatus = function (){
    let finished = this.guess.every((letter)=>{
        return this.guessedLetters.includes(letter) || letter ===' '
    })
     if(this.missedGuess===0){
        this.status = 'failed'
     }else if(finished){
        this.status = 'finished'
     }
     else{
        this.status = 'playing'
     }

}
Hangman.prototype.getPuzzel = function () {
    let puzzle = ''

    this.guess.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle = puzzle + letter
        }
            else{
            puzzle = puzzle + '*'
        }
    }
    )
         return puzzle
}
Hangman.prototype.message = function(){
   if(this.status === 'playing'){
    return `Guesses left:${this.missedGuess}`
   }else if(this.status === 'failed'){
    return `Nice try! this word was "${this.guess.join('')}"`
   }else{
    return 'Great work! you guessed the word'
   }
}

Hangman.prototype.makeGuess = function(guess){
     guess = guess.toLowerCase()
     if(this.status!=='playing'){
        return 
     }
     const isUnique = !this.guessedLetters.includes(guess)
     const isBadGuess = !this.guess.includes(guess)
     if(isUnique){
        this.guessedLetters.push(guess)
     }

     if(isUnique && isBadGuess){
        this.missedGuess--
     }
     this.calStatus()
}





 

