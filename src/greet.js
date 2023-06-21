// @ts-check

import welcome from './welcome.js';
import getUserAnswer from './get-user-answer.js';

const greet = () => {
  console.log(`${welcome()}\n`);

  const question = 'May I have your name? ';
  const userAnswer = getUserAnswer(question);

  console.log(`Hello, ${userAnswer}!`);
};

export default greet;
