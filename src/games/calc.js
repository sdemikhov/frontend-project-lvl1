import _ from 'lodash';

const operator = { '+': _.add, '-': _.subtract, '*': _.multiply };

export default () => ({
  description: 'What is the result of the expression?',
  generateQuiz: () => {
    const sign = _.sample(Object.keys(operator));

    const operand1 = _.random(100);
    const operand2 = _.random(100);

    const question = `${operand1} ${sign} ${operand2}`;
    const calculateExpression = operator[sign];
    const answer = String(calculateExpression(operand1, operand2));

    return { question, answer };
  },
});
