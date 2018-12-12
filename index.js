const _ = require('lodash')
const TO_LOWER_CASE = 'toLowerCase'
const TO_UPPER_CASE = 'toUpperCase'

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
    isValidEmail
}

function isNull(obj) {
    return (undefined === obj || null === obj)
}

function isNotNull(obj) {
    return !isNull(obj)
}

function isArray(array) {
    return _.isArray(array)
}

function isFilledArray(arr) {
    return (isNotNull(arr) && isArray(arr) && arr.length > 0)
}

function isEmpty(obj) {
    return _.isEmpty(obj)
}

function isNotEmpty(obj) {
    return !_.isEmpty(obj)
}

function isNumber(any) {
    return (typeof any === 'number')
}

function isString(any) {
    return (typeof any === 'string')
}

function formatNumber(num, decimals = 2) {
    if (!isNumber(num) && !isString(num)) {
        throw new Error('Please provide valid number for formatting')
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

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

function sanitize(str, strCase) {
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

function toString(param) {
    return sanitize(param.toString())
}

function isEmptyString(str) {
    return typeof str === 'string' && (isNull(str) || '' === str.trim())
}

function isValidEmail(email) {
    if (isEmptyString(email)) {
        return false
    }

    const sanitizedEmail = sanitize(email, TO_LOWER_CASE)
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(sanitizedEmail))
}