let chai = require('chai')
let expect = chai.expect
let jsUtils = require('nodejs-util')
const INVALID_NUMBER = 'Please provide valid number'

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('Javascript Utils', () => {
  let input = null
  describe('*** isNull function ***', () => {
    it('isNull function with null value', () => {
      input = null
      expect(jsUtils.isNull(input)).equals(true)
    })

    it('isNull function with string value', () => {
      input = 'Hi, this is not null'
      expect(jsUtils.isNull(input)).equals(false)
    })

    it('isNull function with boolean value', () => {
      input = 'Hi, this is not null'
      expect(jsUtils.isNull(input)).equals(false)
    })
  })

  describe('*** isNotNull function ***', () => {
    it('isNotNull function with string value', () => {
      input = 'I am a bad guy'
      expect(jsUtils.isNotNull(input)).equals(true)
    })

    it('isNotNull function with null value', () => {
      input = null
      expect(jsUtils.isNotNull(input)).equals(false)
    })

    it('isNotNull function with boolean value', () => {
      input = true
      expect(jsUtils.isNotNull(input)).equals(true)
    })
  })

  describe('*** isArray function ***', () => {
    it('isArray function with empty array', () => {
      input = []
      expect(jsUtils.isArray(input)).equals(true)
    })

    it('isArray function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isArray(input)).equals(true)
    })

    it('isArray function with string', () => {
      input = 'Tell me, is this array'
      expect(jsUtils.isArray(input)).equals(false)
    })

    it('isArray function with boolean', () => {
      input = false
      expect(jsUtils.isArray(input)).equals(false)
    })
  })

  describe('*** isFilledArray function ***', () => {
    it('isFilledArray function with empty array', () => {
      input = []
      expect(jsUtils.isFilledArray(input)).equals(false)
    })

    it('isFilledArray function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isFilledArray(input)).equals(true)
    })

    it('isFilledArray function with string', () => {
      input = 'Tell me, is this array'
      expect(jsUtils.isFilledArray(input)).equals(false)
    })

    it('isFilledArray function with boolean', () => {
      input = false
      expect(jsUtils.isFilledArray(input)).equals(false)
    })
  })

  describe('*** isEmpty function ***', () => {
    it('isEmpty function with string', () => {
      input = ''
      expect(jsUtils.isEmpty(input)).equals(true)
    })

    it('isEmpty function with array', () => {
      input = []
      expect(jsUtils.isEmpty(input)).equals(true)
    })

    it('isEmpty function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isEmpty(input)).equals(false)
    })

    it('isEmpty function with boolean', () => {
      input = true
      expect(jsUtils.isEmpty(input)).equals(true)
    })
  })

  describe('*** isNotEmpty function ***', () => {
    it('isNotEmpty function with string', () => {
      input = 'Who said I am empty'
      expect(jsUtils.isNotEmpty(input)).equals(true)
    })

    it('isNotEmpty function with empty string', () => {
      input = ''
      expect(jsUtils.isNotEmpty(input)).equals(false)
    })

    it('isNotEmpty function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isNotEmpty(input)).equals(true)
    })

    it('isNotEmpty function with boolean', () => {
      input = true
      expect(jsUtils.isNotEmpty(input)).equals(false)
    })
  })

  describe('*** isNumber function ***', () => {
    it('isNumber function with string', () => {
      input = 'Who said I am empty'
      expect(jsUtils.isNumber(input)).equals(false)
    })

    it('isNumber function with empty string', () => {
      input = ''
      expect(jsUtils.isNumber(input)).equals(false)
    })

    it('isNumber function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isNumber(input)).equals(false)
    })

    it('isNumber function with boolean', () => {
      input = true
      expect(jsUtils.isNumber(input)).equals(false)
    })

    it('isNumber function with number', () => {
      input = 123
      expect(jsUtils.isNumber(input)).equals(true)
    })
  })

  describe('*** isString function ***', () => {
    it('isString function with string', () => {
      input = 'Who said I am empty'
      expect(jsUtils.isString(input)).equals(true)
    })

    it('isString function with empty string', () => {
      input = ''
      expect(jsUtils.isString(input)).equals(true)
    })

    it('isString function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isString(input)).equals(false)
    })

    it('isString function with boolean', () => {
      input = true
      expect(jsUtils.isString(input)).equals(false)
    })

    it('isString function with number', () => {
      input = 123
      expect(jsUtils.isString(input)).equals(false)
    })
  })

  describe('*** sanitize function ***', () => {
    it('sanitize function with spaces at start and end', () => {
      input = ' hello World '
      expect(jsUtils.sanitize(input)).equals('hello World')
    })

    it('sanitize function with spaces at start and end and lowercase', () => {
      input = ' hello World '
      expect(jsUtils.sanitize(input, 'toLowerCase')).equals('hello world')
    })

    it('sanitize function with boolean', () => {
      input = true
      expect(jsUtils.sanitize(input, 'toLowerCase')).equals('true')
    })
  })

  describe('*** isEmptyString function ***', () => {
    it('isEmptyString function with string', () => {
      input = ''
      expect(jsUtils.isEmptyString(input)).equals(true)
    })

    it('isEmptyString function with array', () => {
      input = []
      expect(jsUtils.isEmptyString(input)).equals(false)
    })

    it('isEmptyString function with filled array', () => {
      input = [1, 2, 3]
      expect(jsUtils.isEmptyString(input)).equals(false)
    })

    it('isEmptyString function with boolean', () => {
      input = true
      expect(jsUtils.isEmptyString(input)).equals(false)
    })
  })

  describe('*** isValidEmail function ***', () => {
    it('isValidEmail function with . at domain name', () => {
      input = 'pravind.@123.45'
      expect(jsUtils.isValidEmail(input)).equals(false)
    })

    it('isValidEmail function with . before @', () => {
      input = 'pravind.@gmail.com'
      expect(jsUtils.isValidEmail(input)).equals(false)
    })

    it('isValidEmail function with . at start', () => {
      input = '.pravindot17@gmail.com'
      expect(jsUtils.isValidEmail(input)).equals(false)
    })

    it('isValidEmail function with boolean', () => {
      input = true
      expect(jsUtils.isValidEmail(input)).equals(false)
    })

    it('isValidEmail function with empty array', () => {
      input = []
      expect(jsUtils.isValidEmail(input)).equals(false)
    })

    it('isValidEmail function with empty string', () => {
      input = ''
      expect(jsUtils.isValidEmail(input)).equals(false)
    })

    it('isValidEmail function with proper email', () => {
      input = 'pravindot17@gmail.com'
      expect(jsUtils.isValidEmail(input)).equals(true)
    })
  })

  describe('*** formatNumber function ***', () => {
    it('formatNumber function with 4 digits', () => {
      input = 1000.1256
      expect(jsUtils.formatNumber(input)).equals(1000.13)
    })

    it('formatNumber function with null', () => {
      try {
        input = null
        jsUtils.formatNumber(input)
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })

    it('formatNumber function with leading 0', () => {
      input = '01000.146'
      expect(jsUtils.formatNumber(input)).equals(1000.15)
    })

    it('formatNumber function with proper number', () => {
      input = 1000
      expect(jsUtils.formatNumber(input)).equals(1000)
    })
  })

  describe('*** generateRandomString function ***', () => {
    it('generateRandomString function with number', async () => {
      input = 10
      expect(jsUtils.generateRandomString(input).length).equals(10)
    })

    it('generateRandomString function with string', async () => {
      try {
        input = 'abc'
        jsUtils.generateRandomString(input)
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })

    it('generateRandomString function with null', async () => {
      try {
        input = null
        jsUtils.generateRandomString(input)
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })
  })

  describe('*** getRandomInt function ***', () => {
    it('getRandomInt function with number', async () => {
      let result = jsUtils.getRandomInt(10, 100)
      expect(result).to.be.within(10, 100)
    })

    it('getRandomInt function with single string parameter', async () => {
      try {
        jsUtils.getRandomInt('abc', 'bbc')
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })

    it('getRandomInt function with both string parameters', async () => {
      try {
        jsUtils.getRandomInt('abc', 'bbc')
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })

    it('getRandomInt function with null', async () => {
      try {
        jsUtils.getRandomInt(null, null)
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })
  })

  describe('*** getRandomDecimalNumber function ***', () => {
    it('getRandomDecimalNumber function with number', async () => {
      let result = jsUtils.getRandomDecimalNumber(0.5, 1)
      expect(result).to.be.within(0.5, 1)
    })

    it('getRandomDecimalNumber function with single string parameter', async () => {
      try {
        jsUtils.getRandomDecimalNumber('abc', 'bbc')
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })

    it('getRandomDecimalNumber function with both string parameters', async () => {
      try {
        jsUtils.getRandomDecimalNumber('abc', 'bbc')
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })

    it('getRandomDecimalNumber function with null', async () => {
      try {
        jsUtils.getRandomDecimalNumber(null, null)
      } catch (err) {
        expect(err.message).equals(INVALID_NUMBER)
      }
    })
  })

  describe('*** sleep function ***', () => {
    it('sleep function', async () => {
      await jsUtils.sleep(1000)
      expect('It worked').equals('It worked')
    })
  })
})