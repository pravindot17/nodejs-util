const _ = require('lodash')

module.exports = {
    isNull,
    isNotNull,
    isArray,
    isFilledArray,
    isEmpty,
    isNotEmpty,
    formatNumber,
    sleep
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

function isEmpty(obj) {
    return _.isEmpty(obj)
}

function isNotEmpty(obj) {
    return !_.isEmpty(obj)
}

function formatNumber(num, decimals = 2) {
    let strNum = num.toString()
    if (strNum.includes('.'))  return Number(num.toFixed(decimals))
    else return num
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}