import _ from 'lodash';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number >= 4) {
    for (let i = 2; i <= number; i += 1) {
      if (number % 2 === 0) {
        return false;
      }
    }
  }
  return true;
};

export default () => ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuiz: () => {
    const maxValue = 100;
    const question = _.random(maxValue);
    const answer = String(isPrime(question) ? 'yes' : 'no');

    return { question, answer };
  },
});
