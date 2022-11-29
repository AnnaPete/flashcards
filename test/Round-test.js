const { expect } = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require('../src/Round');

describe('Round', function () {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(7, 'What special thing do Americans do on the Fourth of July?', ['eat hamburgers', 'go shopping', 'watch fireworks'], 'watch fireworks')
    card2 = new Card(12, 'What do Americans eat on Christmas?', ['Hot Dogs', 'Ham', 'Corned Beef'], 'Ham')
    card3 = new Card(10, 'What is the best holiday in America?', ['Christmas', 'Thanksgiving', 'Halloween', 'St. Patty\'s Day'], 'Halloween')
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function () {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(round.deck[0])
  })

  it('should have a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck.cards)
  })

  it('should have a method that returns the current card being played', function () {
    expect(round.returnCurrentCard()).to.equal(round.deck[0])
  })

  it('should have a method that updates turn count', function () {
    expect(round.turnCount).to.equal(0)

    round.takeTurn('watch fireworks')
    expect(round.turnCount).to.equal(1)
  })

  it('should have a method that calculates and returns the percentage of correct guesses', function () {

    round.takeTurn('watch fireworks')
    expect(round.calculatePercentCorrect()).to.equal('100')

    round.takeTurn('Ham')
    expect(round.calculatePercentCorrect()).to.equal('100')

    round.takeTurn('Christmas')
    expect(round.calculatePercentCorrect()).to.equal('67')
  })

  it('should have a method that prints the following to the console: ** Round over! ** You answered <>% of the questions correctly! ', function () {
    round.takeTurn('watch fireworks')
    round.takeTurn('Ham')
    round.takeTurn('Christmas')
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  })
})
