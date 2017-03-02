#!/usr/bin/env node
const {words} = require('superb');

console.log(words);

// const args = process.argv.slice(2);
// const args = process.argv.filter((item,index)=> index>1);

let [,, ...args] = process.argv;
console.log(args)
//example for stdout: output what you want
process.stdout.write(`${args.toString()}\n`);// this is what is going background with console.log
