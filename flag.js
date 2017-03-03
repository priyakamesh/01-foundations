#!/usr/bin/env node
const space = " ".repeat(47)
const space1 = " ".repeat(65)
const chalk = require("chalk")
for (let i=0; i < 3; i++){
  console.log(`${chalk.bgBlue.bold(' *  *  *  *  *  * ')}${chalk.bgRed(`${space}`)}`)
  console.log(`${chalk.bgBlue.bold('   *  *  *  *  *  ')}${chalk.bgWhite(`${space}`)}`)
}
console.log(`${chalk.bgBlue.bold(' *  *  *  *  *  * ')}${chalk.bgRed(`${space}`)}`)
for (let i =0; i< 3; i++){
  console.log(`${chalk.bgWhite(`${space1}`)}`)
  console.log(`${chalk.bgRed(`${space1}`)}`)

}
