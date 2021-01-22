import { getUsername, sendQuestion } from './cli.js';

export default (game) => {
  const username = getUsername();
  console.log(game.description);

  const maxWinsCount = 3;
  let currentWinsCount = 0;

  while (currentWinsCount < maxWinsCount) {
    const quiz = game.generateQuiz();
    const userAnswer = sendQuestion(quiz.question);
    if (userAnswer === quiz.answer) {
      console.log('Correct!');
      currentWinsCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${quiz.answer}'.`);
      console.log(`\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
