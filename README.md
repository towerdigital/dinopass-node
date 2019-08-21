# dinopass-node

[![dinopass](https://img.shields.io/badge/dino-pass-blue.svg)](https://github.com/philliphenslee/smartslack)
[![Node Module](https://img.shields.io/badge/node.js-module-82bb22.svg)](https://github.com/philliphenslee/smartslack)
[![License](http://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/philliphenslee/smartslack/master/LICENSE)

A very simple promise based node.JS api client for [dinopass.com](https://dinopass.com).
Awesome password generator for kids, and apparently middle aged IT guys.

About Dino's Passwords
What does 'Simple password' mean?

Simple passwords only have lower case letters and numbers. They are easier to remember but might also be easier for someone else to guess.
What does 'Strong password' mean?

Strong passwords have mixed upper and lower case letters, a special character (like @, \$, ! and so on) plus some numbers. They are best to use for important things like email accounts.

### Example usage

```
dinopass = require('dinopass-node')

// Using async/await

const asyncFunction = async () => {
  simplePassword = await dinopass.getSimplePassword(1)
  console.log(simplePassword)
}

asyncFunction()  output> [ 'newiron29' ]

// Promise

dinopass.getStrongPassword(5)
.then(pwds => console.log(pwds))

output>

[
  'poorB@ll45',
  'richNew+10',
  'paleOl!ve66',
  'hug3Curve94',
  'lu$hSun14'
]
```
