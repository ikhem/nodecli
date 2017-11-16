const { prompt } = require('inquirer');

const option1 = [
  {
    type: 'input',
    name: 'len',
    message: 'Enter the desired length: '
  },
  {
    type: 'input',
    name: 'min',
    message: 'Enter in the minimum of the range desired: '
  },
  {
    type: 'input',
    name: 'max',
    message: 'Enter in the maximum of the range desired: '
  }
];

option2 = [
  {
    type: 'input',
    name: 'arr',
    message: 'Enter in an array of user defined integers: '
  }
]

const randomGenInts = () => {
  prompt(option1).then(answers => {
    let newArr = [];
    for(let i = 0; i < answers.len; i++){
      newArr.push(Math.floor(Math.random() * (answers.max - answers.min + 1) + answers.min));
    }
    console.log(newArr);
  })
}

const userDefinedInts = () => {
  prompt(option2).then(answers => {
    console.log(answers.arr);
  })
}

module.exports = { 
  randomGenInts,
  userDefinedInts
};