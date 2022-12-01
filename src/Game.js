const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const {lotrData} = require('./new-game-data')
const util = require('./util');

class Game {
  constructor(dataSet) {
    this.currentRound = null
    this.dataSet = dataSet
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    var cards = this.dataSet.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    })
    var deck = new Deck(cards)
    var round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;