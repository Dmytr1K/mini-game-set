// @ts-check

import readlineSync from 'readline-sync';

/**
 * @param {string} question
 * @return {string}
 */
const getUserAnswer = (question) => {
  const answer = String(readlineSync.question(question));

  return answer;
};

export default getUserAnswer;
