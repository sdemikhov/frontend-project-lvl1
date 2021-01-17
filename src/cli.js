import readlineSync from 'readline-sync';

const sendQuestion = (question) => readlineSync.question(`Question: ${question}\nYour answer: `).toLowerCase();

const getUsername = () => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export { getUsername, sendQuestion };
