// @ts-check

import getWelcomePhrase from './utilities/get-welcome-phrase.js';
import getPlayerAnswer from './utilities/get-player-answer.js';

const greetPlayer = () => {
  console.log(`${getWelcomePhrase()}\n`);

  const question = 'May I have your name? ';
  const playerName = getPlayerAnswer(question);

  console.log(`Hello, ${playerName}!`);
};

export default greetPlayer;
