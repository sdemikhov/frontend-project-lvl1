import { getUsername, sendQuestion } from './cli.js';

const maxWins = 3;

export default (buildGame) => {
  const username = getUsername();
  const [description, generateQuestion] = buildGame();
  console.log(description);
  let currentWins = 0;
  while (currentWins < maxWins) {
    const [question, answer] = generateQuestion();
    const userAnswer = sendQuestion(question);
    if (userAnswer === answer) {
      console.log('Correct!');
      currentWins += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${username}!`);
      currentWins = 0;
    }
  }
  console.log(`Congratulations, ${username}!`);
};