import _ from 'lodash';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export default () => ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuiz: () => {
    const question = _.random(100);
    const answer = isPrime(question) ? 'yes' : 'no';

    return { question, answer };
  },
});
