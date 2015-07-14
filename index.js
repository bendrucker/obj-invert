'use strict'

var map = require('map-obj')
var ap = require('ap')

module.exports = ap.partialRight(map, invert)

function invert (key, value) {
  return [value, key]
}
