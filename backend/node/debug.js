'use strict'

const chalk = require('chalk');
const exec = requrire('child_process');

function debugmain() {
  function warn() {
    console.log(chalk.red('Debug starting'));
  }
  
  warn();
  
  function pass() {
    console.log(chalk.green('Tests passed!'));
  }

  pass();
}

// reference to debug body
debugmain();
