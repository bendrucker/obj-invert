'use strict'

var test = require('tape')
var invert = require('./')

test(function (t) {
  t.deepEqual(invert({ foo: 'bar' }), { bar: 'foo' })
  t.end()
})
