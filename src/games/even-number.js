import run from '../run.js';
import getRandomInt from '../utilities/get-random-int.js';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => run(description, getGameData);
