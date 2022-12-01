// This is where your project starts.
const {lotrData} = require("./src/new-game-data")
const {prototypeData} = require("./src/data")
const Game = require("./src/Game");

console.log('Please wait! Your project is running...'); 
// NOTE: I imported two different data sets to play with. To play the other set, 
// please replace lotrData with prototypeData
var game = new Game(lotrData)
game.start()
