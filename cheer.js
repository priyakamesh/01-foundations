#!/usr/bin/env node

// Cheer
const first = 'Priya'; //const
const second = 'Kamesh'; //const

// object literal shorthand
const myName = { first, second } //const
const nodeCheer = ({first, second}) => { // destructuring assignment
  let name = `${first} ${second}`.toUpperCase(); // string template literals, let
  [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function
    let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`. Surprise! It's ES6
    console.log(`Gimmmie ${conj} ${letter.toUpperCase()}!`); // string template literals again
  });
  console.log(`What's that spell?\n${name}!`);
};

nodeCheer(myName);
