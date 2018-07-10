# vapr-no-input [![Build Status](https://travis-ci.org/JoshuaWise/vapr-no-input.svg?branch=master)](https://travis-ci.org/JoshuaWise/vapr-no-input)

## Installation

```bash
npm install --save vapr
npm install --save vapr-no-input
```

## Usage

With the `vapr-no-input` plugin, if someone makes a request containing any body content, they'll receive `413 Payload Too Large`.

```js
const noInput = require('vapr-no-input');
const app = require('vapr')();
const route = app.get('/foo');

route.use(noInput());
route.use((req) => {
  // This request had no body content
});
```
