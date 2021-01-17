import _ from 'lodash';

export default () => ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuiz: () => {
    const question = _.random(100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return { question, answer };
  },
});
