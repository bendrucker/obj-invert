# obj-invert [![Build Status](https://travis-ci.org/bendrucker/obj-invert.svg?branch=master)](https://travis-ci.org/bendrucker/obj-invert)

> Swap an object's keys with its values


## Install

```
$ npm install --save obj-invert
```


## Usage

```js
var invert = require('obj-invert')

invert({foo: 'bar'})
//=> {bar: 'foo'}
```

## API

#### `invert(obj)` -> `object`

##### obj

*Required*  
Type: `object`

An object to invert.


## License

MIT © [Ben Drucker](http://bendrucker.me)
