import _ from 'lodash';

export default () => ({
  description: 'What number is missing in the progression?',
  generateQuiz: () => {
    const maxRandomValue = 100;
    const minStep = 1;
    const maxStep = 10;
    const minProgressionLength = 5;
    const maxProgressionLength = 10;
    const minIndex = 0;

    const start = _.random(maxRandomValue);
    const step = _.random(minStep, maxStep);
    const progressionLength = _.random(minProgressionLength, maxProgressionLength);
    const missingMemberIndex = _.random(minIndex, progressionLength - 1);

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
