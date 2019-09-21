# dinopass-node

[![dinopass-node](https://img.shields.io/badge/dinopass-node-orange?logo=&style=for-the-badge)](https://github.com/towerdigital/dinopass-node)
![typescript](https://img.shields.io/badge/typescript-blue?logo=typescript&style=for-the-badge)
[![Node Module](https://img.shields.io/badge/node-module-green?logo=node.js&style=for-the-badge)](https://github.com/towerdigital/dinopass-node)
![npm](https://img.shields.io/npm/v/dinopass-node?color=green&label=dinopass-node&logo=npm&logoColor=white&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/towerdigital/dinopass-node?color=lightgray&style=for-the-badge)<br><br>
[![NPM](https://nodei.co/npm/dinopass-node.png?compact=true)](https://nodei.co/npm/dinopass-node/)
<br><br>
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
