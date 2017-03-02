#!/usr/bin/env node
// console.log(process)
console.log("Node.js version",`${process.version}\n`,"V8 version", process.versions.v8)
const {version}= process
const {versions} = process
console.log('Node.js version ',`${version}\n`,'v8 version', `${versions.v8}`)
