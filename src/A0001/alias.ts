/* eslint-disable*/
type Idade = number;
type Pessoa = {
    nome: string,
    idade:Idade,
    salario:number,
    corPreferida?:string
}

type CorRGB = 'Vermelho' | 'Verde' |'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' |'Preto'
type CorPreferida = CorCMYK | CorRGB


const pessoas:Pessoa={
    idade:10,
    nome:'Luiz',
    salario:1000_000
}

export function setCorPreferida(pessoas:Pessoa,cor:CorPreferida):Pessoa{
    return{...pessoas,corPreferida:cor}
}

console.log(setCorPreferida(pessoas,'Amarelo'))