import runGame from '../run-game.js';
import getRandomInt from '../utilities/get-random-int.js';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameStageData = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => runGame(gameRules, getGameStageData());
