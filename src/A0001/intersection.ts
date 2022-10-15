/* eslint-disable*/
type TemNome ={nome:string}
type TemSobrenome = {sobrenome:string}
type TemIdade ={idade:number}


type Pessoas = TemNome & TemSobrenome & TemIdade;


const pessoa: Pessoas={
    idade:30,
    nome:'enderson',
    sobrenome:'csar'
}


type AB = 'A'|'B';
type AC = 'A'|'C';

type intersecao = AB & AC;



console.log(pessoa)

export {pessoa}