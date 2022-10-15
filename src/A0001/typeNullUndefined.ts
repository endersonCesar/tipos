/* eslint-disable*/
let x;

if(typeof x==='undefined') x=20;
console.log(x*2);


export function createPerson(firstName:string,lastName?:string):{firstName:string;lastName?:string;}{
    return{
        firstName,
        lastName,

    }
}

export function squareOf(x:any){
    if(typeof x==='number') return x*x
    return null
}

const squareOfTwo = squareOf(2)
const squareOfString = squareOf('2')


if( typeof squareOfTwo === null){
    console.log('consta invalida ')
}else{
    console.log(squareOfTwo)
}