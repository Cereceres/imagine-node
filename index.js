const { PI } = Math;
const Pi2 = PI;


const Complex = module.exports = class {
    constructor(real = 0, imaginary = 0) {
        this.real = real;
        this.imaginary = imaginary;
    }

    sum(other = {}) {
        const { real = 0, imaginary = 0 } = other;

        return new Complex(this.real + real, this.imaginary + imaginary);
    }

    static getPolar(real, imaginary) {
        const norm = real * real + imaginary * imaginary;
        let theta;
        if (real) theta = Math.atan(imaginary / real);
        if (!real && imaginary > 0) theta = PI / 2;
        if (!real && imaginary < 0) theta = -PI / 2;
        if (real < 0) theta = theta + PI;

        return { theta, norm };
    }

    sub(other = {}) {
        const { real = 0, imaginary = 0 } = other;

        return new Complex(this.real - real, this.imaginary - imaginary);
    }

    multiply(other = {}) {
        const { real = 0, imaginary = 0 } = other;
        const { real:selfReal, imaginary: selfImaginary } = this;
        return new Complex(
            selfReal * real - selfImaginary * imaginary,
            selfImaginary * real + imaginary * selfReal
        );
    }

    div(other = {}) {
        const { real = 0, imaginary = 0 } = other;
        const norm = real * real + imaginary * imaginary;

        if (!norm) throw new Error(`norm = ${ norm} is not valid`);

        return new Complex(
            (this.real * real + this.imaginary * imaginary) / norm,
            (this.imaginary * real - imaginary * this.real) / norm
        );
    }

    pow(n) {
        const { real = 0, imaginary = 0 } = this;
        const { norm, theta } = Complex.getPolar(real, imaginary);
        if (!norm) return this;

        return new Complex(
            norm * Math.cos(theta * n),
            norm * Math.sin(theta * n)
        );
    }

    sqrt(n = 2) {
        const { real = 0, imaginary = 0 } = this;
        let { norm, theta } = Complex.getPolar(real, imaginary);
        theta = theta / n;
        if (!norm) return this;

        const roots = new Array(n);
        return roots.map((item, index) => new Complex(
            norm * Math.cos(theta + Pi2 * index / n),
            norm * Math.sin(theta + Pi2 * index / n)
        ));
    }

    exp() {
        const { real = 0, imaginary = 0 } = this;
        return new Complex(
            Math.exp(real) * Math.cos(imaginary),
            Math.exp(real) * Math.cos(imaginary)
        );
    }

    ln() {
        const { real = 0, imaginary = 0 } = this;
        const { norm, theta } = Complex.getPolar(real, imaginary);
        return new Complex(
            Math.log(norm),
            theta
        );
    }

    conjugate() {
        return new Complex(this.real, -1 * this.imaginary);
    }
};
