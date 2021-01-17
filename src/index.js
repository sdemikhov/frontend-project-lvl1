import { getUsername, sendQuestion } from './cli.js';

export default (game) => {
  const username = getUsername();
  console.log(game.description);

  const maxWins = 3;
  let currentWins = 0;

  while (currentWins < maxWins) {
    const quiz = game.generateQuiz();
    const userAnswer = sendQuestion(quiz.question);
    if (userAnswer === quiz.answer) {
      console.log('Correct!');
      currentWins += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${quiz.answer}'.\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
