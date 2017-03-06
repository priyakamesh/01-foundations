#!/usr/bin/env node
const {createReadStream} = require('fs')
const readStream = createReadStream('languages.json')

const {Readable,Writable,Transform} = require('stream')
  const transformStream = Transform();
  const writeStream = Writable();
readStream.on ("data",(buffer)=>{
  // process.stdout.write(buffer.toString())

  transformStream._transform = (buffer,encoding,done) =>{
    done(null,`${buffer.toString().toUpperCase()}`)
  }
  writeStream._write = (buffer,encoding,done)=>{
    process.stdout.write(`${buffer}`)
    done()
  }

})
readStream.pipe(transformStream).pipe(writeStream)
