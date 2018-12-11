let chai = require('chai')
let expect = chai.expect
let jsUtils = require('nodejs-util')

chai.use(require('chai-like'))
chai.use(require('chai-things'))

describe('Javascript Utils', () => {
  let input = null
  describe('*** NULL CASES ***', () => {
    it('positive isNull function', () => {
      input = null
      expect(jsUtils.isNull(input)).equals(true)
    })

    it('negative isNull function', () => {
      input = 'Hi, this is not null'
      expect(jsUtils.isNull(input)).equals(false)
    })

    it('positive isNotNull function', () => {
      input = 'I am a bad guy'
      expect(jsUtils.isNotNull(input)).equals(true)
    })

    it('negative isNotNull function', () => {
      input = null
      expect(jsUtils.isNotNull(input)).equals(false)
    })
  })

  describe('*** ARRAY CASES ***', () => {
    it('positive isArray function', () => {
      input = []
      expect(jsUtils.isArray(input)).equals(true)
    })

    it('negative isArray function', () => {
      input = 'Tell me, is this array'
      expect(jsUtils.isArray(input)).equals(false)
    })

    it('positive isFilledArray function', () => {
      input = [1, 2, 3]
      expect(jsUtils.isFilledArray(input)).equals(true)
    })

    it('negative isFilledArray function', () => {
      input = []
      expect(jsUtils.isFilledArray(input)).equals(false)
    })
  })

  describe('*** empty CASES ***', () => {
    it('positive isEmpty function', () => {
      input = ''
      expect(jsUtils.isEmpty(input)).equals(true)
    })

    it('negative isEmpty function', () => {
      input = 'Is is empty?'
      expect(jsUtils.isEmpty(input)).equals(false)
    })

    it('positive isNotEmpty function', () => {
      input = 'Who said I am empty'
      expect(jsUtils.isNotEmpty(input)).equals(true)
    })

    it('negative isNotEmpty function', () => {
      input = ''
      expect(jsUtils.isNotEmpty(input)).equals(false)
    })
  })

  describe('*** STRING CASES ***', () => {
    it('sanitize function', () => {
      input = ' hello World '
      expect(jsUtils.sanitize(input, 'toLowerCase')).equals('hello world')
    })

    it('toString function', () => {
      input = 1234
      expect(jsUtils.toString(input)).equals('1234')
    })

    it('isEmptyString function', () => {
      input = ''
      expect(jsUtils.isEmptyString(input)).equals(true)
    })

    it('isValidEmail function', () => {
      input = 'pravind.@123.45'
      expect(jsUtils.isValidEmail(input)).equals(false)
    })
  })

  describe('*** OTHER CASES ***', () => {
    it('formatNumber function', () => {
      input = 1000.1256
      expect(jsUtils.formatNumber(input)).equals(1000.13)
    })

    it('sleep function', async () => {
      await jsUtils.sleep(1000)
      expect('It worked').equals('It worked')
    })
  })
})