import _ from 'lodash';

const operator = { '+': _.add, '-': _.subtract, '*': _.multiply };

export default () => ({
  description: 'What is the result of the expression?',
  generateQuiz: () => {
    const operation = _.sample(Object.keys(operator));

    const operand1 = _.random(100);
    const operand2 = _.random(100);

    const question = `${operand1} ${operation} ${operand2}`;
    const answer = String(operator[operation](operand1, operand2));

    return { question, answer };
  },
});
