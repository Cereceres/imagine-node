const { PI } = Math;
const Pi2 = PI;


const Complex = module.exports = class {
    constructor(real, imaginary) {
        this.real = 1;
        this.imaginary = 0;
        if (typeof real === 'number') this.real = real;
        if (real && typeof real.r === 'number') this.real = real.r;
        if (real && typeof real.real === 'number') this.real = real.real;
        if (real && typeof real.i === 'number') this.imaginary = real.i;
        if (real && typeof real.imaginary === 'number') this.imaginary = real.imaginary;
        if (typeof imaginary === 'number') this.imaginary = imaginary;

        this.r = this.real;
        this.i = this.imaginary;
    }

    static im(imaginary) {
        return new Complex(0, imaginary);
    }

    im() {
        return new Complex(0, this.imaginary);
    }

    static re(real) {
        return new Complex(real, 0);
    }

    re() {
        return new Complex(this.real, 0);
    }

    add(other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        return new Complex(this.real + real, this.imaginary + imaginary);
    }

    static add(complex, other = 0, defaultImaginary) {
        const _this = new Complex(complex);
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        return new Complex(_this.real + real, _this.imaginary + imaginary);
    }

    static getPolar(real, imaginary) {
        return new Complex(real, imaginary).getPolar();
    }

    getPolar() {
        const { real, imaginary } = this;
        const norm = Math.hypot(real, imaginary);
        const theta = Math.atan2(imaginary, real);

        return { theta, norm };
    }

    sub(other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        return new Complex(this.real - real, this.imaginary - imaginary);
    }

    static sub(complex, other = 0, defaultImaginary) {
        const _this = new Complex(complex);
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        return new Complex(_this.real - real, _this.imaginary - imaginary);
    }

    multiply(other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        const { real:selfReal, imaginary: selfImaginary } = this;

        return new Complex(
            selfReal * real - selfImaginary * imaginary,
            selfImaginary * real + imaginary * selfReal
        );
    }

    static multiply(complex, other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        const {
            r:selfR = 0,
            i: selfI = 0,
            real:selfReal = selfR,
            imaginary: selfImaginary = selfI
        } = complex;

        return new Complex(
            selfReal * real - selfImaginary * imaginary,
            selfImaginary * real + imaginary * selfReal
        );
    }

    div(other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        const norm = Math.hypot(real, imaginary);
        const norm2 = norm * norm;

        if (!norm) throw new Error(`norm = ${ norm } is not valid`);
        return new Complex(
            (this.real * real + this.imaginary * imaginary) / norm2,
            (this.imaginary * real - imaginary * this.real) / norm2
        );
    }

    static div(complex, other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        const _this = new Complex(complex);
        const norm = Math.hypot(real, imaginary);
        const norm2 = norm * norm;

        if (!norm) throw new Error(`norm = ${ norm } is not valid`);
        return new Complex(
            (_this.real * real + _this.imaginary * imaginary) / norm2,
            (_this.imaginary * real - imaginary * _this.real) / norm2
        );
    }

    inverse() {
        const {
            i = 0,
            r = 0,
            real = r,
            imaginary = i
        } = this;
        const norm = Math.hypot(real, imaginary);
        const norm2 = norm * norm;

        if (!norm) throw new Error(`norm = ${ norm } is not valid`);
        return new Complex(
            real / norm2,
            -imaginary / norm2
        );
    }

    static inverse(complex, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? complex : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = complex;
        const norm = Math.hypot(real, imaginary);
        const norm2 = norm * norm;

        if (!norm) throw new Error(`norm = ${ norm } is not valid`);
        return new Complex(
            real / norm2,
            -imaginary / norm2
        );
    }

    pow(other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        return this.ln().multiply({ real, imaginary }).exp();
    }

    static pow(complex, other = 0, defaultImaginary) {
        const {
            i = 0,
            r = 0,
            real = typeof other === 'number' ? other : r,
            imaginary = typeof defaultImaginary === 'number' ? defaultImaginary : i
        } = other;
        return new Complex(complex).ln().multiply({ real, imaginary }).exp();
    }

    sqrt(n = 2) {
        const { r = 0, i = 0, real = r, imaginary = i } = this;
        let { norm, theta } = Complex.getPolar(real, imaginary);
        theta = theta / n;
        if (!norm) return this;

        const roots = new Array(n);
        return roots.map((item, index) => new Complex(
            norm * Math.cos(theta + Pi2 * index / n),
            norm * Math.sin(theta + Pi2 * index / n)
        ));
    }

    static sqrt(complex, n = 2) {
        const { r = 0, i = 0, real = r, imaginary = i } = complex;
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
        const { r = 0, i = 0, real = r, imaginary = i } = this;
        return new Complex(
            Math.exp(real) * Math.cos(imaginary),
            Math.exp(real) * Math.sin(imaginary)
        );
    }

    static exp(complex) {
        const { r = 0, i = 0, real = r, imaginary = i } = complex;
        return new Complex(
            Math.exp(real) * Math.cos(imaginary),
            Math.exp(real) * Math.sin(imaginary)
        );
    }

    norm() {
        const { r = 0, i = 0, real = r, imaginary = i } = this;
        return Math.hypot(real, imaginary);
    }

    static norm(complex) {
        const { r = 0, i = 0, real = r, imaginary = i } = complex;
        return Math.hypot(real, imaginary);
    }

    cos() {
        return this
            .multiply({ imaginary:1 })
            .exp()
            .add(
                this.multiply({ imaginary:-1 }).exp()
            )
            .div({ real:2 });
    }

    static cos(complex, other) {
        const _this = new Complex(complex, other);
        return _this
            .multiply({ imaginary:1 })
            .exp()
            .add(
                _this.multiply({ imaginary:-1 }).exp()
            )
            .div({ real:2 });
    }

    sin() {
        return this
            .multiply({ imaginary:1 })
            .exp()
            .sub(
                this.multiply({ imaginary:-1 }).exp()
            )
            .div({ imaginary: 2 });
    }

    static sin(complex, other) {
        const _this = new Complex(complex, other);
        return _this
            .multiply({ imaginary:1 })
            .exp()
            .sub(
                _this.multiply({ imaginary:-1 }).exp()
            )
            .div({ imaginary: 2 });
    }

    ln() {
        const { r = 0, i = 0, real = r, imaginary = i } = this;
        const { norm, theta } = Complex.getPolar(real, imaginary);
        return new Complex(
            Math.log(norm),
            theta
        );
    }

    static ln(complex) {
        const { r = 0, i = 0, real = r, imaginary = i } = complex;
        const { norm, theta } = Complex.getPolar(real, imaginary);
        return new Complex(
            Math.log(norm),
            theta
        );
    }

    conjugate() {
        return new Complex(this.real, -this.imaginary);
    }

    static conjugate(complex) {
        return new Complex(complex).conjugate();
    }
};
