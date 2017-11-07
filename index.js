const prompt = require('prompt');

class Game {
  constructor() {
    this.players = [{name: 'Player1', marker: 'X'}, {name: 'Player2', marker: 'O'}];
    this.playerIndex = 0;
    this.gameBoard = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.gameMessage = 'New game, press enter to start';
  }

  displayHeader() {
    console.log('TIC-TAC-TOE\n');
  }

  displayGameMessage() {
    console.log(`${this.gameMessage}\n`);
  }

  displayGameBoard() {
    for (let i = 0; i < this.gameBoard.length; i++) {
      let rowText = ' ';
      for (let j = 0; j < this.gameBoard[i].length; j++) {
        const wall = j === this.gameBoard[i].length - 1 ? '' : '  |  ';
        rowText += this.gameBoard[i][j] + wall;
      }

      console.log(rowText);

      if (i !== this.gameBoard.length - 1) {
        console.log('––––––––––––––-');
      }
    }
  }

  display() {
    this.displayHeader();
    this.displayGameMessage();
    this.displayGameBoard();
  }

  didWin(marker) {
    // check rows
    
    // check columns

    // check diags
  }

  turn(player) {
    this.gameMessage = `${player.name} select a row and column to drop a marker`;
    this.display();

    prompt.start();
    prompt.get(['row', 'column'], (err, results) => {
      const row = +results.row;
      const column = +results.column;
      console.log(`row = ${typeof row}`);
      console.log(`column = ${typeof column}`);
      // check if a legal play
      if (this.gameBoard[row][column] === ' ') {
        // place the player marker at that spot
        this.gameBoard[row][column] = player.marker;
        // check if they won
        if (this.didWin(player.marker)) {

        }

        // if not then call turn for next player
        this.playerIndex = (this.playerIndex + 1) % 2;
        this.turn(this.players[this.playerIndex]);
      } else {
        prompt.start();
        prompt.get('Not a valid spot on board, press enter to try again', (err, results) => {
          this.turn(this.players[this.playerIndex]);
        });
      }
    });
  }

  start() {
    game.display();
    prompt.start();
    prompt.get('PRESS ENTER TO START', (err, results) => {
      this.turn(this.players[this.playerIndex]);
    });
  }
}

const game = new Game();
game.start();
