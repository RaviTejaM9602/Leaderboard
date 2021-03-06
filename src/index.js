import './style.css';
import { leaderboard, refreshLeaderboard } from './modules/refresh.js';

const FORM = document.querySelector('form');
const NAME = FORM.querySelector('input');
const SCORE = FORM.querySelector('input[type="number"]');
const REFRESH = document.querySelector('#refresh');

const refreshInput = () => {
  NAME.value = '';
  SCORE.value = '';
};

(() => {
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jnQ9SaNBcxmauGizi1rh/scores',
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
      refreshInput(),
    );
  });
})();

REFRESH.addEventListener('click', () => {
  leaderboard.innerHTML = '';
  refreshLeaderboard();
});
