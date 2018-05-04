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
    .add({ real: 2, imaginary:3 })
    .sub({ real: 1, imaginary:1 })
    .multiply({ real: 2, imaginary:-3 })
    .div({ real: 2, imaginary:3 });
assert(chainingComplex.real === 2);
assert(chainingComplex.imaginary === -3);ç

complex
    .ln()
    .multiply({ real:1, imaginary:1 })
    .exp()

```
# API imagineClass(real, imaginary)

# Properties

## real Number

## imaginary Number

# ClassMethods

## add({real, imaginary}, {real, imaginary}) -> imagineInstance
## sub({real, imaginary}, {real, imaginary}) -> imagineInstance
## div({real, imaginary}, {real, imaginary}) -> imagineInstance
## multiply({real, imaginary}, {real, imaginary}) -> imagineInstance
## ln({real, imaginary}) -> imagineInstance
## cos({real, imaginary}) -> imagineInstance
## sin({real, imaginary}) -> imagineInstance
## pow({real, imaginary}, {real, imaginary}) -> imagineInstance
## sqrt({real, imaginary},integer) ->ArrayOfImagineInstance
## inverse({real, imaginary}) ->imagineInstance
## im(number) -> imagineInstance
return a complex number with only imaginary part equal to number given
## re(number) -> imagineInstance
return a complex number with only real part equal to number given

return a imaginary number
# InstanceMethods

## add({real, imaginary}) -> imagineInstance
## sub({real, imaginary}) -> imagineInstance
## div({real, imaginary}) -> imagineInstance
## multiply({real, imaginary}) -> imagineInstance
## ln() -> imagineInstance
## cos() -> imagineInstance
## sin() -> imagineInstance
## pow({real, imaginary}) -> imagineInstance
## sqrt(integer) ->ArrayOfImagineInstance
## inverse() ->imagineInstance
## im() -> imagineInstance
return a complex number with only imaginary part
## re() -> imagineInstance
return a complex number with only real part



