import './style.css';
let leaderboard = document.querySelector('.items');
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
      }
    );
  });
})();

const refreshLeaderboard = async () => {
  let response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hu7RDeMDKj2AivBi1yhx/scores'
  );
  let scoreText = await response.text();
  let score = JSON.parse(scoreText);
  score.result.forEach((player) => {
    leaderboard.innerHTML += `<tr>
      <td>${player.user}: ${player.score}</td>
    </tr>`;
  });
};


REFRESH.addEventListener('click', () => {
  leaderboard.innerHTML = '';
  refreshLeaderboard();
});
