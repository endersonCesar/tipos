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




function semRetorno(...args:string[]): void{
    console.log(args.join(' '))
}

const pessoaCompleta={
    nome:'Luiz',
    sobrenome:'Otávio',
    exibirNome():void{
    console.log(this.nome+' '+this.sobrenome)
    }
};

semRetorno('Jão','batata')
pessoaCompleta.exibirNome();


const objetoA :{
    readonly chaveA:string;
    chaveB:string;
    chaveC?:string;
    [key:string]:unknown
}={
    chaveA:'Valor A',
    chaveB:'Valor b',
}

objetoA.chaveB='bANATA'