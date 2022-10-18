/* eslint-disable*/
export class Empresa {
    readonly nome: string;
    protected readonly colaboradores: Colaborador[]=[];
    private readonly cnpj:string;
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
export class Udemy extends Empresa{
    constructor(){
        super('udemy','11111111111111')
    }
     popColaborador():Colaborador | null{
        const colaborador = this.colaboradores.pop()
        if(colaborador) return colaborador
        return null;
     }
}
const empresa1 = new Udemy()
const colaboradore1 = new Colaborador('enderson','cesar')
const colaboradore2 = new Colaborador('enderson2','cesar2')
const colaboradore3 = new Colaborador('enderson3','cesar3')
empresa1.adicionaColaborador(colaboradore2)
empresa1.adicionaColaborador(colaboradore1)
empresa1.adicionaColaborador(colaboradore3)

empresa1.mostarColaboradores();

const colaboradorRemovido  = empresa1.popColaborador()

console.log(colaboradorRemovido)