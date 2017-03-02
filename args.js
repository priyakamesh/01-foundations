#!/usr/bin/env node

let [,,...args] = process.argv
 let b = args.map(Number)
 let sum = b.reduce((a,b)=> a+ b,0)
console.log(sum)
