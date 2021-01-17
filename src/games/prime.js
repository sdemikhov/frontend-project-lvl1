import _ from 'lodash';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export default () => ([
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  () => {
    const number = _.random(100);
    const answer = isPrime(number) ? 'yes' : 'no';

    return [number, answer];
  },
]);
