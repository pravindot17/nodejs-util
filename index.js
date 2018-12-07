const _ = require('lodash')

module.exports = {
    isNull,
    isNotNull,
    isArray,
    isFilledArray
}

function isNull(obj) {
    if (undefined === obj || null === obj) return true
    return false
}

function isNotNull(obj) {
    return !isNull(obj)
}

function isArray(array) {
    return _.isArray(array)
}

function isFilledArray(arr) {
    if (isNotNull(arr) && isArray(arr) && arr.length > 0) return true
    return false
}