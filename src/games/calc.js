import _ from 'lodash';

const operations = { '+': _.add, '-': _.subtract, '*': _.multiply };

export default () => ({
  description: 'What is the result of the expression?',
  generateQuiz: () => {
    const operation = _.sample(Object.keys(operations));
    const maxValue = 100;
    const operand1 = _.random(maxValue);
    const operand2 = _.random(maxValue);

    const question = `${operand1} ${operation} ${operand2}`;
    const answer = String(operations[operation](operand1, operand2));

    return { question, answer };
  },
});
