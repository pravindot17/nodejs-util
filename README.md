JS Util
===================
This library is usefull for different utils functions required while development

[![npm version](https://badge.fury.io/js/nodejs-util.svg)](https://badge.fury.io/js/nodejs-util)

## How to use
Let's see about js code:
```js
let jsutil = require('nodejs-util');

let isArrayResult = jsutil.isArray([1, 2, 3]);
console.log('I think it is array right?', isArrayResult);

let password = jsutil.generateRandomString(15)
console.log('Your temporary generated password is', isArrayResult);

let roundedNumber = jsutil.formatNumber(1000.1256)
console.log('Your number is modified to', roundedNumber);

let isValid = jsutil.isValidEmail('%myrandom_email@gmail.com*')
console.log('I guess, you are trying to fool me with this email?', isValid);

jsutil.sleep(2000).then(() => {
  console.log('Wake up now!! 2 seconds are over');
})
```