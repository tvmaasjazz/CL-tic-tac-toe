class Game {
  constructor() {
    this.players = ['Player1', 'Player2'];
    this.gameBoard = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
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

    // display the row

    // then line

    //then row

    //then last row
  }

  display() {
    this.displayHeader();
    this.displayGameMessage();
    this.displayGameBoard();
  }

  startGame() {

  }
}

const game = new Game();
game.display();
