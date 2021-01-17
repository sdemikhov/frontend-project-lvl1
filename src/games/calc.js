import _ from 'lodash';

const operators = [['+', _.add], ['-', _.subtract], ['*', _.multiply]];

export default () => ([
  'What is the result of the expression?',
  () => {
    const [sign, calculateExpression] = _.sample(operators);

    const operand1 = _.random(100);
    const operand2 = _.random(100);

    const expression = `${operand1} ${sign} ${operand2}`;
    const result = String(calculateExpression(operand1, operand2));

    return [expression, result];
  },
]);
