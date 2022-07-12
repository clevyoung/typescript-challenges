/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple
 * 참고
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * https://nickangeli.com/posts/typescript-type-challenge-exclude-walkthrough/
 * https://blog.beraliv.dev/2021-04-12-exclude-under-the-hood
 */

type MyExclude<T, U> = T extends U ? never : T;

type myUnionType = '🍇' | '🍎' | '🫐' | '🍋';

// This works!
let lemon: myUnionType = '🍋';

let noLemonsPlease: MyExclude<myUnionType, '🍋'> = '🍎';
