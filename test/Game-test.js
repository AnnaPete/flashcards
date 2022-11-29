const { expect } = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require("../src/Game");

describe('Game', function () {
  let game
  this.beforeEach(() => {
    game = new Game()
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })

  it('should be an instantiation of Game', function() {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should start a new game', function() {
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)
    expect(game.currentRound.deck[0]).to.be.an.instanceOf(Card)
  })
})
