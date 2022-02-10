import './style.css';
// import refreshLeaderboard from './modules/refresh.js'

const leaderboard = document.querySelector('#items');
const FORM = document.querySelector('form');
const NAME = FORM.querySelector('input');
const SCORE = FORM.querySelector('input[type="number"]');
const REFRESH = document.querySelector('#refresh');

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BxXNm40rTdIjhpN9YGnO/scores')
  .then(response => response.json())
  .then(json => console.log(json));
  