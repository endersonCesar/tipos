/* eslint-disable*/
function addOuConcat(a:number | string,b:number|string){
    if(typeof a==='number' && typeof b==="number") return a+b
    return `${a}${b}`
}
console.log(addOuConcat(10,20))
console.log(addOuConcat('10','20'))