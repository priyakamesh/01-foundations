#!/usr/bin/env node
const chalk = require("chalk")
for (let i=0; i < 3; i++){
  console.log(`${chalk.bgBlue.bold(' * * * * * * * * ')}${chalk.bgRed('                                                      ')}`)
  console.log(`${chalk.bgBlue.bold(' * * * * * * * * ')}${chalk.bgWhite('                                                      ')}`)
}
console.log(`${chalk.bgBlue.bold(' * * * * * * * * ')}${chalk.bgRed('                                                      ')}`)
for (let i =0; i< 3; i++){
  console.log(`${chalk.bgWhite('                                                                       ')}`)
  console.log(`${chalk.bgRed('                                                                       ')}`)

}
