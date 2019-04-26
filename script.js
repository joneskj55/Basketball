let playerOneScore = 0;
let playerTwoScore = 0;

function displayPlayerOneScore() {
    document.getElementById('playerOneScore').innerHTML = 'Score: ' + playerOneScore;
}

function displayPlayerTwoScore() {
    document.getElementById('playerTwoScore').innerHTML = 'Score: ' + playerTwoScore;
}
function onePointPlayerOne() {
    playerOneScore = playerOneScore + 1;
    displayPlayerOneScore();
}

function twoPointsPlayerOne() {
    playerOneScore = playerOneScore +2;
    displayPlayerOneScore();
}

function threePointsPlayerOne() {
    playerOneScore = playerOneScore + 3;
    displayPlayerOneScore();
}

function onePointPlayerTwo() {
    playerTwoScore = playerTwoScore + 1;
    displayPlayerTwoScore();
}


function twoPointsPlayerTwo() {
    playerTwoScore = playerTwoScore +2;
    displayPlayerTwoScore();
}

function threePointsPlayerTwo() {
    playerTwoScore = playerTwoScore + 3;
    displayPlayerTwoScore();
}

function restartGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    displayPlayerOneScore();
    displayPlayerTwoScore();
}
