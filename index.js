const _ = require('lodash')
const TO_LOWER_CASE = 'toLowerCase'
const TO_UPPER_CASE = 'toUpperCase'
const INVALID_NUMBER = 'Please provide valid number'

module.exports = {
  isNull,
  isNotNull,
  isArray,
  isFilledArray,
  isEmpty,
  isNotEmpty,
  isNumber,
  isString,
  formatNumber,
  sleep,
  sanitize,
  toString,
  isEmptyString,
  isValidEmail,
  generateRandomString,
  getRandomInt,
  getRandomDecimalNumber
}

function isNull (obj) {
  return (undefined === obj || obj === null)
}

function isNotNull (obj) {
  return !isNull(obj)
}

function isArray (array) {
  return _.isArray(array)
}

function isFilledArray (arr) {
  return (isNotNull(arr) && isArray(arr) && arr.length > 0)
}

function isEmpty (obj) {
  return _.isEmpty(obj)
}

function isNotEmpty (obj) {
  return !_.isEmpty(obj)
}

function isNumber (any) {
  return (typeof any === 'number')
}

function isString (any) {
  return (typeof any === 'string')
}

function formatNumber (num, decimals = 2) {
  if (!isNumber(num) && !isString(num)) {
    throw new Error(INVALID_NUMBER)
  }

  let strNum = num.toString()
  if (strNum.includes('.')) {
    if (isString(num)) {
      num = Number(num)
    }
    return Number(num.toFixed(decimals))
  } else {
    return Number(num)
  }
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

function sanitize (str, strCase) {
  let sanitizedStr
  if (!isNull(str)) {
    sanitizedStr = str.toString().trim()
    if (!isNull(strCase)) {
      switch (strCase) {
        case TO_LOWER_CASE:
          sanitizedStr = sanitizedStr.toLowerCase()
          break

        case TO_UPPER_CASE:
          sanitizedStr = sanitizedStr.toUpperCase()
          break

        default:
          break
      }
    }
  }
  return sanitizedStr
}

function toString (param) {
  return sanitize(param.toString())
}

function isEmptyString (str) {
  return typeof str === 'string' && (isNull(str) || str.trim() === '')
}

function isValidEmail (email) {
  if (isEmptyString(email)) {
    return false
  }

  const sanitizedEmail = sanitize(email, TO_LOWER_CASE)
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(sanitizedEmail))
}

function generateRandomString (len = 10) {
  if (typeof len !== 'number') throw new Error(INVALID_NUMBER)

  let str = ''
  let i = 0

  for (i = 0; i < len; i++) {
    switch (Math.floor(Math.random() * 3 + 1)) {
      case 1: // digit
        str += (Math.floor(Math.random() * 9)).toString()
        break

      case 2: // small letter
        str += String.fromCharCode(Math.floor(Math.random() * 26) + 97) // 'a'.charCodeAt(0));
        break

      case 3: // big letter
        str += String.fromCharCode(Math.floor(Math.random() * 26) + 65) // 'A'.charCodeAt(0));
        break

      default:
        break
    }
  }
  return str
}

function getRandomInt (min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') throw new Error(INVALID_NUMBER)

  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomDecimalNumber (min, max, decimal = 2) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof decimal !== 'number') throw new Error(INVALID_NUMBER)
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimal))
}
