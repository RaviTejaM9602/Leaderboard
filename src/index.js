import './style.css';
// import refreshLeaderboard from './modules/refresh.js'

const leaderboard = document.querySelector('#items');
const FORM = document.querySelector('form');
const NAME = FORM.querySelector('input');
const SCORE = FORM.querySelector('input[type="number"]');
const REFRESH = document.querySelector('#refresh');

(() => {
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BxXNm40rTdIjhpN9YGnO/scores',
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
      refreshInput()
    );
  });
})();

const refreshInput = () => {
   NAME.value = '';
   SCORE.value = '';
}

