import { getUsername, sendQuestion } from './cli.js';

export default (game) => {
  const username = getUsername();
  const [description, generateQuestion] = game;
  console.log(description);
  const maxWins = 3;
  let currentWins = 0;
  while (currentWins < maxWins) {
    const [question, answer] = generateQuestion();
    const userAnswer = sendQuestion(question);
    if (userAnswer === answer) {
      console.log('Correct!');
      currentWins += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
