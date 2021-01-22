import _ from 'lodash';

export default () => ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuiz: () => {
    const maxValue = 100;
    const question = _.random(maxValue);
    const answer = String(question % 2 === 0 ? 'yes' : 'no');
    return { question, answer };
  },
});
