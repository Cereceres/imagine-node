
const assert = require('assert');
const Complex = require('../index');


describe('test to i method', () => {
    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(10, 4);

        const string = complex.toString();
        assert(string === '10 + 4i');
    });

    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(1, 1);

        const string = complex.toString();
        assert(string === '1 + i');
    });

    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(1, -1);

        const string = complex.toString();
        assert(string === '1 - i');
    });

    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(10, -4);

        const string = complex.toString();
        assert(string === '10 - 4i');
    });

    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(10, 0);

        const string = complex.toString();
        assert(string === '10');
    });

    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(0, 3);

        const string = complex.toString();
        console.log('string ', string);
        assert(string === '3i');
    });

    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(0, -3);

        const string = complex.toString();
        assert(string === '-3i');
    });
});
