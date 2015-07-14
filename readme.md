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

Returns a new object with the key/value pairs from `obj` swapped.

##### obj

*Required*  
Type: `object`

An object to invert. `obj` will not be modified.


## License

MIT © [Ben Drucker](http://bendrucker.me)
