# Simple dinopass.com API client

A ver simple promise based api client for dinopass.com.

### Examples

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
