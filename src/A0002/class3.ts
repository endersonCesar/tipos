/* eslint-disable*/
export class Pessoas2 {
    constructor(
        public nome:string,
        public sobrenome:string,
        private idade:number,
        protected cpf: string,

    )
    {}
    getIdade(): number{
        return this.idade;
    }
    getCpf():string{
        return this.cpf;
    }
    getNomeCompleto():string{
        return this.nome+' '+this.sobrenome
    }
}

export class Aluno extends Pessoas2{

    constructor(
        nome:string,
        sobrenome:string,
        idade:number,
        cpf: string,
       public sala:string,
    )
    {
        super(nome,sobrenome,idade,cpf)
    }
    getNomeCompleto():string{
       console.log('FAZENDO ALGO')
       const result = super.getNomeCompleto()
       return result +' HEYYYYYYYYYYY|'
    }
}
export class Cliente extends Pessoas2{
    getNomeCompleto():string{
        return 'Isso vem do cliente '+this.nome+' '+this.sobrenome
    }
}
const aluno = new Aluno('enderson','Miranda',30,'000000000','2A')
const pessoa2 = new Pessoas2('enderson','Miranda',30,'000000000')
const cliente = new Cliente('enderson','Miranda',30,'000000000')

console.log([aluno.getNomeCompleto(),pessoa2.getNomeCompleto(),cliente.getNomeCompleto()])

console.log(aluno)