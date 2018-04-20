# imagine-node
module to work with complex numbers

# Install 

```bash
npm install imagine-node
```

# Usage

```js
const complex = new Complex(1, 1);

const chainingComplex = complex
    .sum({ real: 2, imaginary:3 })
    .sub({ real: 1, imaginary:1 })
    .multiply({ real: 2, imaginary:-3 })
    .div({ real: 2, imaginary:3 });
assert(chainingComplex.real === 2);
assert(chainingComplex.imaginary === -3);

```
# API imagineClass(real, imaginary)

# Properties

## real

## imaginary

# Methods

## sum({real, imaginary}) -> imagineInstance
## sub({real, imaginary}) -> imagineInstance
## div({real, imaginary}) -> imagineInstance
## multiply({real, imaginary}) -> imagineInstance
## ln() -> imagineInstance
## pow(integer) -> imagineInstance
## sqrt(integer) -> imagineInstance

