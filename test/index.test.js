
const assert = require('assert');
const Complex = require('../index');


describe('test to class', () => {
    it('should the calculate the class of a complex number', () => {
        const complex = new Complex({ real:1, imaginary:1 });

        const classComplex = complex
            .add({ real: 2, imaginary:3 })
            .sub({ real: 1, imaginary:1 })
            .multiply({ real: 2, imaginary:-3 })
            .div({ real: 2, imaginary:3 });
        assert(classComplex.real - 2 < 0.0001);
        assert(classComplex.imaginary + 3 < 0.00001);
    });


    it('should the calculate the class of a complex number', () => {
        const complex = new Complex();

        const classComplex = complex
            .multiply({ real: 2, imaginary:-3 });
        assert(classComplex.real === 2);
        assert(classComplex.imaginary === -3);
    });
});
