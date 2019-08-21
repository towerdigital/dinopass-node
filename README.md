# Simple dinopass.com API client

A very simple promise based api client for [dinopass.com](https://dinopass.com).
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
