// @ts-check

import welcome from './welcome.js';
import getUserAnswer from './get-user-answer.js';

const greet = () => {
  console.log(`${welcome()}\n`);

  const question = 'May I have your name? ';
  const userName = getUserAnswer(question);

  console.log(`Hello, ${userName}!`);
};

export default greet;
