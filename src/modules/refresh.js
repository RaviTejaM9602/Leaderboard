export const leaderboard = document.querySelector('#items');

export const refreshLeaderboard = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jnQ9SaNBcxmauGizi1rh/scores',
  );
  const scoreText = await response.text();
  const score = JSON.parse(scoreText);
  const updateScore = score.result.sort((a, b) => a - b );
  updateScore.forEach((player) => {
    if (player.length === 0) {
      leaderboard.style.border = 'none';
    } else {
      leaderboard.style.border = '2px solid rgb(36, 1, 1)';
      leaderboard.innerHTML += `<li>
      ${player.user}  :  ${player.score}</td>
      </li>`;
    }
  });
};
