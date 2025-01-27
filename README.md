# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.
The function `greeter` expects a single string as input, but the variable `user` is an array of strings.  This results in a type error. The solution involves modifying the function or changing how the array is handled.

## How to reproduce
1. Save the code in `bug.ts`.
2. Compile the code using the TypeScript compiler (tsc bug.ts).
3. Observe the compilation error.