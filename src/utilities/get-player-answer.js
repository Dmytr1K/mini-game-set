// @ts-check

import readlineSync from 'readline-sync';

/**
 * @param {string} question
 * @return {string}
 */
const getPlayerAnswer = (question) => {
  const playerAnswer = String(readlineSync.question(question));

  return playerAnswer;
};

export default getPlayerAnswer;
