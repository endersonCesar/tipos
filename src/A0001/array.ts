/* eslint-disable*/
export function multiplicaArg(...args:Array<number>):number{
    return args.reduce((ac,valor)=>ac*valor,1)
}

/* eslint-disable*/
export function concatenaString(...args:string[]):string{
    return args.reduce((ac,valor)=>ac+valor)
}

function toUpperCase(...args:string[]):string[]{
    return args.map((valor)=>valor.toUpperCase());
}
const result = multiplicaArg(1,2,3);
const concatenacao = concatenaString('enderson','cesar','alves');
const upper = toUpperCase('enderson','cesar','alves');
console.log(upper)