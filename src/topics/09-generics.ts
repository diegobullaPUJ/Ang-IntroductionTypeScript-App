
export function WhatMyType<T>( argument: T ): T {

    return argument

}

let amIString = WhatMyType<string>('Hola mundo');
let amINumber = WhatMyType<number>(100);
let amIArray  = WhatMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split);
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));



