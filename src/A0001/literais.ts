/* eslint-disable*/
let x= 10;
let a =100 as const;

const pessoa ={
    nome:'Luiz' as const,
    sobrenome:'enderson'
}


function escolhaCor2(cor:'Vermelho'|'Amarelo'):string{
    return cor;
}

console.log(escolhaCor2('Amarelo'))
export default 1;