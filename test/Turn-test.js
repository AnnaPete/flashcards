const { expect } = require("chai");
const Card = require("../src/Card");

const Turn = require('../src/Turn');

describe('Turn', function () {
  let card1, card2, card3;
  let turn1, turn2, turn3, turn4;

  this.beforeEach(() => {
    card1 = new Card(7, 'What special thing do Americans do on the Fourth of July?', ['eat hamburgers', 'go shopping', 'watch fireworks'], 'watch fireworks')
    card2 = new Card(12, 'What do Americans eat on Christmas?', ['Hot Dogs', 'Ham', 'Corned Beef'], 'Ham')
    card3 = new Card(10, 'What is the best holiday in America?', ['Christmas', 'Thanksgiving', 'Halloween', 'St. Patty\'s Day'], 'Halloween')

    turn1 = new Turn('watch fireworks', card1)
    turn2 = new Turn('Ham', card2)
    turn3 = new Turn('Halloween', card3)
    turn4 = new Turn('Thanksgiving', card3)
  })

  it('should have an argument of a string that represents a user\s guess to the question', function () {
   
    expect(turn1.guess).to.equal('watch fireworks')
  })

  it('should have an argument of a card object for the current card in play', function () {

    expect(turn1.card).to.equal(card1);
  })

  it('should have a method that returns the guess', () => {
   
    expect(turn1.returnGuess()).to.deep.equal('watch fireworks')
  })

  it('should have a method that returns the card', () => {

    expect(turn2.returnCard()).to.deep.equal(card2)
  })

  it('should have a method that returns true if the user\’s guess matches the correct answer', () => {

    expect(turn3.evaluateGuess()).to.equal(true)
  })

  it('should have a method that returns false if the user\’s guess does not match the correct answer', () => {

    expect(turn4.evaluateGuess()).to.equal(false)
  })

  it('should have a method that returns \‘correct!\’ if the guess is correct', () => {
   
    expect(turn2.giveFeedback()).to.deep.equal('Correct!')
  })

  it('should have a method that returns \‘incorrect!\’ if the guess is incorrect', () => {
   
    expect(turn4.giveFeedback()).to.deep.equal('Incorrect!')
  })
})