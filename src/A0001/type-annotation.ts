/* eslint-disable*/

let pessoa:{
    nome:string,idade:number,adulto?:boolean
} = {
    idade:20,
    nome:'luiz'
}

function soma (x:number,y:number): number{
    return x+y
}

const soma2:(x:number,y:number) => number =(x,y) =>x+y