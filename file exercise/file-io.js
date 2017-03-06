#!/usr/bin/env node
const {readFileSync} = require('fs');

const fileArg = process.argv[2];

if (fileArg) {
  try{
    const data = readFileSync(fileArg,"")
    process.stdout.write(data)
    console.log(data)
  }catch(e){
    console.error(e.stack)
  }
}else{
  process.exit()
}
