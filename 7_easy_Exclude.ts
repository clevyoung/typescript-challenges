/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 * μ°Έκ³ 
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * https://nickangeli.com/posts/typescript-type-challenge-exclude-walkthrough/
 * https://blog.beraliv.dev/2021-04-12-exclude-under-the-hood
 */

type MyExclude<T, U> = T extends U ? never : T;

type myUnionType = 'π' | 'π' | 'π«' | 'π';

// This works!
let lemon: myUnionType = 'π';

let noLemonsPlease: MyExclude<myUnionType, 'π'> = 'π';
