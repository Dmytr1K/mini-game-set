// @ts-check

import getWelcomePhrase from './utilities/get-welcome-phrase.js';
import getUserAnswer from './utilities/get-user-answer.js';

const greet = () => {
  console.log(`${getWelcomePhrase()}\n`);

  const question = 'May I have your name? ';
  const userName = getUserAnswer(question);

  console.log(`Hello, ${userName}!`);
};

export default greet;
