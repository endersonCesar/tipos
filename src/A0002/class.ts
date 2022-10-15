/* eslint-disable*/
export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[]=[];
    protected readonly cnpj:string;
    constructor(nome:string,cnpj:string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador:Colaborador):void{
        this.colaboradores.push(colaborador)
    }
    mostarColaboradores():void{
        for (const colaborador of this.colaboradores){
            console.log(colaborador)
        }
    }

}

export class Colaborador {
    constructor(public readonly nome:string,public readonly sobrenome:string){
    
    }
}
const empresa1 = new Empresa('udemy','11111111111111')
const colaboradore1 = new Colaborador('enderson','cesar')
const colaboradore2 = new Colaborador('enderson2','cesar2')
const colaboradore3 = new Colaborador('enderson3','cesar3')
empresa1.adicionaColaborador(colaboradore2)
empresa1.adicionaColaborador(colaboradore1)
empresa1.adicionaColaborador(colaboradore3)
console.log(empresa1)
empresa1.mostarColaboradores();