import _ from 'lodash';

const gcd = (number1, number2) => {
  let [smaller, bigger] = [number1, number2].sort();
  let remainder = bigger % smaller;

  while (remainder !== 0) {
    bigger = smaller;
    smaller = remainder;
    remainder = bigger % smaller;
  }
  return smaller;
};

export default () => ({
  description: 'Find the greatest common divisor of given numbers.',
  generateQuiz: () => {
    const maxValue = 100;
    const operand1 = _.random(maxValue);
    const operand2 = _.random(maxValue);

    const question = `${operand1} ${operand2}`;
    const answer = String(gcd(operand1, operand2));

    return { question, answer };
  },
});
