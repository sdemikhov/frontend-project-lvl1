import readlineSync from 'readline-sync';

const getUsername = () => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export default getUsername;
