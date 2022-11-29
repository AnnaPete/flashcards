const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect

const Deck = require('../src/Deck');

describe('Deck', function () {

  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function () {
    const deck = new Deck()

    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should contain an array of Card objects', function() {
    const card = new Card()
    const deck = new Deck([card, card, card, card, card])

    expect(deck.cards).to.deep.equal([card, card, card, card, card])
  })

  it('should know how many cards are in the deck', function() {
    const card = new Card()
    const deck = new Deck([card, card, card, card, card], 5)

    expect(deck.countCards()).to.equal(5)
  })
})
