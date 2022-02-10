import  leaderboard  from '../index.js';

const refreshLeaderboard = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BxXNm40rTdIjhpN9YGnO/scores',
    );
  const scoreText = await response.text();
  const score = JSON.parse(scoreText);
  score.result.forEach((player) => {
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

export default refreshLeaderboard;