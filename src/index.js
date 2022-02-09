import './style.css';

const leaderboard = document.querySelector('#items');
const FORM = document.querySelector('form');
const NAME = FORM.querySelector('input');
const SCORE = FORM.querySelector('input[type="number"]');
const REFRESH = document.querySelector('#refresh');

(() => {
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oHFx2AoOEAVDqu2U4dC1/scores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: NAME.value,
          score: SCORE.value,
        }),
      },
    );
  });
})();

const refreshLeaderboard = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oHFx2AoOEAVDqu2U4dC1/scores',
  );
  const scoreText = await response.text();
  const score = JSON.parse(scoreText);
  score.result.forEach((player) => {
    if (player.length === 0) {
      leaderboard.style.border = 'none';
    } else {
      leaderboard.style.border = '2px solid rgb(36, 1, 1)';
      leaderboard.innerHTML += `<li>
      ${player.user}: ${player.score}</td>
      </li>`;
    }
  });
};

REFRESH.adudEventListener('click', () => {
  leaderboard.innerHTML = '';
  refreshLeaderboard();
});
