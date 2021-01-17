import _ from 'lodash';

export default () => ([
  'What number is missing in the progression?',
  () => {
    const start = _.random(100);
    const step = _.random(1, 10);
    const progressionLength = 10;
    const missingMemberIndex = _.random(9);

    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      const value = start + i * step;
      progression.push(value);
    }

    const answer = String(progression[missingMemberIndex]);
    progression[missingMemberIndex] = '..';

    const expression = progression.join(' ');
    return [expression, answer];
  },
]);
