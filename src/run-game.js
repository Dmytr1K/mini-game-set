import readlineSync from 'readline-sync';

const stagesCount = 3;

const passGameStage = (remainingStages, getGameStageData) => {
  if (remainingStages === 0) {
    return true;
  }

  const stageData = getGameStageData();
  const { question, correctAnswer } = stageData;

  console.log(`Question: ${question}`);
  const playerAnswer = readlineSync.question('Your answer: ');

  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  return passGameStage(remainingStages - 1, getGameStageData);
};

const runGame = (gameRules, getGameStageData) => {
  console.log('Welcome to the Brain Games!');

  console.log(gameRules);

  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  if (passGameStage(stagesCount, getGameStageData)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default runGame;
