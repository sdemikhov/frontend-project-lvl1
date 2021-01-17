import _ from 'lodash';

export default () => ({
  description: 'What number is missing in the progression?',
  generateQuiz: () => {
    const start = _.random(100);
    const step = _.random(1, 10);
    const progressionLength = _.random(5, 10);
    const missingMemberIndex = _.random(0, progressionLength - 1);

    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      const value = start + i * step;
      progression.push(value);
    }

    const answer = String(progression[missingMemberIndex]);
    progression[missingMemberIndex] = '..';

    return { question: progression.join(' '), answer };
  },
});
