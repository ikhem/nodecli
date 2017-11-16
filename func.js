const { prompt } = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'len',
    message: 'Enter the desired length'
  },
  {
    type: 'input',
    name: 'max',
    message: 'Enter in the Maximum of the Range desired'
  },
  {
    type: 'input',
    name: 'min',
    message: 'Enter in the Minimum of the Range desired'
  }
];

const randomGenInts = () => {
  prompt(questions).then(answers => {
    let newArr = [];
    for(let i = 0; i < answers.len; i++){
      newArr.push(Math.floor(Math.random() * (answers.max - answers.min + 1) + answers.min));
    }
    console.log(newArr);
  })
}

module.exports = { randomGenInts };