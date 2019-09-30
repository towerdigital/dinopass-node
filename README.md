# dinopass-node

[![npm](https://img.shields.io/npm/v/dinopass-node?color=CC3534&label=dinopass-node&logo=NPM)](https://www.npmjs.com/package/dinopass-node)
[![Build Status](https://travis-ci.org/towerdigital/dinopass-node.svg?branch=master)](https://travis-ci.org/towerdigital/dinopass-node)
[![Coverage Status](https://coveralls.io/repos/github/towerdigital/dinopass-node/badge.svg?branch=master)](https://coveralls.io/github/towerdigital/dinopass-node?branch=master)
![GitHub](https://img.shields.io/github/license/towerdigital/dinopass-node?color=lightgray)
<br><br>
[![NPM](https://nodei.co/npm/dinopass-node.png?compact=true)](https://nodei.co/npm/dinopass-node/)
<br><br>
A very simple promise based API client written in TypeScript for [dinopass.com](https://dinopass.com).
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

### Node.js

```
const DinoPass = require('dinopass-node');

// Using async/await

;(async () => {
const passwords = await DinoPass.strong(1)
console.log(passwords)  // ['paleOl!ve66']
})();

// Promise

DinoPass.simple(1)
.then(p => console.log(p)); // ['crazypromise32']

```

### ES6

```
import * as DinoPass from 'dinopass-node';

DinoPass.simple(1)
.then(p => console.log(p)); // ['crazypromise32']

```

### CDN

For CDN, you can use unpkg, requires dependency axios

[https://unpkg.com/dinopass-node/dist/dinopass.min.js](https://unpkg.com/dinopass-node/dist/dinopass.min.js)

```
<body>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://unpkg.com/dinopass-node/dist/dinopass.min.js"></script>
  <script>
    DinoPass.simple().then(p => console.log(p));  //["ultrabrowser52"]
  </script>
</body>
```
