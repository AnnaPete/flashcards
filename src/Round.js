const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.currentCard = this.deck[0]
    this.turnCount = 0
    this.incorrectAnswers = []
  }

  returnCurrentCard() {
    this.currentCard
    return this.currentCard
  }

  takeTurn(guess) {
    var turn = new Turn(guess ,this.currentCard)
    this.turnCount += 1
    if (turn.evaluateGuess() === false) {
      this.incorrectAnswers.push(this.currentCard.id)
    }
    this.currentCard = this.deck[this.turnCount]
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    var percentCorrect = (this.turnCount - this.incorrectAnswers.length)/this.turnCount * 100
    return percentCorrect.toFixed(0)
  }

  endRound() {
    var percentCorrect = this.calculatePercentCorrect()
    var endMessage =  `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
    console.log(endMessage)
    return endMessage
  }
}
module.exports = Round