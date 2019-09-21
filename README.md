# dinopass-node

[![dinopass](https://img.shields.io/badge/dino-pass-blue.svg)](https://github.com/towerdigital/dinopass-node)
[![Node Module](https://img.shields.io/badge/node.js-module-82bb22.svg)](https://github.com/towerdigital/dinopass-node)
[![npm version](https://badge.fury.io/js/dinopass-node.svg)](https://badge.fury.io/js/dinopass-node)
[![License](http://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/towerdigital/dinopass-node/blob/master/LICENSE)
<br>
[![NPM](https://nodei.co/npm/dinopass-node.png?compact=true)](https://nodei.co/npm/dinopass-node/)

A very simple promise based node.JS api client written in TypeScript for [dinopass.com](https://dinopass.com).
Awesome password generator for kids, and apparently middle aged IT guys.

About Dino's Passwords
What does 'Simple password' mean?

Simple passwords only have lower case letters and numbers. They are easier to remember but might also be easier for someone else to guess.
What does 'Strong password' mean?

Strong passwords have mixed upper and lower case letters, a special character (like @, \$, ! and so on) plus some numbers. They are best to use for important things like email accounts.

### Install

```
npm install dinopass-node
```

### Example usage

```
const DinoPass = require('dinopass-node')

// Using async/await

;(async () => {
const passwords = await DinoPass.strong(1)
console.log(passwords)  // ['paleOl!ve66']
})();

// Promise

DinoPass.simple(1)
.then(p => console.log(p)); // ['crazypromise32']

```
