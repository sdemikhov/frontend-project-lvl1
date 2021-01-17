import _ from 'lodash';

const buildGameEven = () => ([
  'Answer "yes" if the number is even, otherwise answer "no".',
  () => {
    const number = _.random(100);
    const answer = number % 2 === 0 ? 'yes' : 'no';
    return [number, answer];
  },
]);

export default buildGameEven;
