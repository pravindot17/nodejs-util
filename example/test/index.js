let chai = require('chai'),
    expect = chai.expect,
    jsUtils = require('nodejs-util');

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe(('Javascript Utils'), () => {
    let input =  null;
    describe('*** POSITIVE CASES ***', () => {
        it('isNull function', () => {
            input = null;
            expect(jsUtils.isNull(input)).equals(true);
        });

        it('isNotNull function', () => {
            input = 'I am a bad guy';
            expect(jsUtils.isNotNull(input)).equals(true);
        });

        it('isArray function', () => {
            input = [];
            expect(jsUtils.isArray(input)).equals(true);
        });

        it('isFilledArray function', () => {
            input = [1, 2, 3];
            expect(jsUtils.isFilledArray(input)).equals(true);
        });

        it('isEmpty function', () => {
            input = '';
            expect(jsUtils.isEmpty(input)).equals(true);
        });

        it('isNotEmpty function', () => {
            input = 'Who said I am empty';
            expect(jsUtils.isNotEmpty(input)).equals(true);
        });

        it('formatNumber function', () => {
            input = 1000.1256;
            expect(jsUtils.formatNumber(input)).equals(1000.13);
        });

        it('sleep function', async () => {
            await jsUtils.sleep(1000)
            expect('It worked').equals('It worked');
        });
    })

    describe('*** BAD CASES ***', () => {
        it('isNull function', () => {
            input = 'Hi, this is not null';
            expect(jsUtils.isNull(input)).equals(false);
        });

        it('isNotNull function', () => {
            input = null;
            expect(jsUtils.isNotNull(input)).equals(false);
        });

        it('isArray function', () => {
            input = 'Tell me, is this array';
            expect(jsUtils.isArray(input)).equals(false);
        });

        it('isFilledArray function', () => {
            input = [];
            expect(jsUtils.isFilledArray(input)).equals(false);
        });

        it('isEmpty function', () => {
            input = 'Is is empty?';
            expect(jsUtils.isEmpty(input)).equals(false);
        });

        it('isNotEmpty function', () => {
            input = '';
            expect(jsUtils.isNotEmpty(input)).equals(false);
        });
    })
})
