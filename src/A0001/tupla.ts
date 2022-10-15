/* eslint-disable*/

const dadosCliente1: readonly [number,string] = [1,'enderson']
const dadosCliente2:  [number,string,string] = [1,'enderson','jão']
const dadosCliente3:  [number,string,string?] = [1,'enderson','jão']
const dadosCliente4:  [number,string,...string[]] = [1,'enderson','jão']



console.log(dadosCliente1)


// readonly array

const array1: readonly string[] =['Luiz','Otávio'];
const array2: ReadonlyArray<string>=['Luiz','Otávio']


console.log(array1)