const program = require('commander');
const { prompt } = require('inquirer');

const { randomGenInts } = require('./func');

// Specify chosen menu item
const option = [{type: 'input', name: 'choice', message: 'Choice:'}];

// Menu Choices
const menu = [
  '1) Generate a random array of integers',
  '2) Enter a user defined array of integers',
  '3) Generate a random array of characters',
  '4) Enter a user defined array of characters'
]

program
  .version('0.0.1')
  .description('Menu Driven CLI');

program
  .command('start')
  .description('Menu Choice')
  .action(()=>{

    // Loop through menu items
    menu.map(choice => console.log(choice));

    // Provide prompt for user to choose
    prompt(option).then(ans => {
      let choice = Number(ans.choice);
      switch(choice){
        case 1:
          randomGenInts();
          break;
        case 2:
          userDefinedInts();
      }
    })
  })

program.parse(process.argv);