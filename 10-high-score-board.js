// 1
export function createScoreBoard() {
  return {
    'The Best Ever': 1000000,
  }
}

// 2
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

// 3
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

// 4
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;

  return scoreBoard;
}

// 5
export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }

  return scoreBoard;
}

// 6
export function normalizeScore(params) {
  const result = params.normalizeFunction(params.score);
  console.log(result);
  return result;
}
