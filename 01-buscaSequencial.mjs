const  frutas=['Laranja','maça','uva','pera','jabuticaba','limão','mamão','tangerina']
const numeros=[1,5,7,10,2,24,19]

function buscaSenquencial(vetor,valorBusca){
    //percurso do vetor com for tradicional
    for(let i = 0;i < vetor.length;i++){
        if(vetor[i]===valorBusca)return i
    }
    return -1 //valorBusca ñ exsite no vetor
}

console.log("Buscando Tangerina:",buscaSenquencial(frutas,"tangerina"))
console.log("Buscando limão:",buscaSenquencial(frutas,"limão"))
console.log("Buscando morango:",buscaSenquencial(frutas,"morango"))
console.log("Buscando o número 5:",buscaSenquencial(numeros,5))
console.log("Buscando o número 50:",buscaSenquencial(numeros,50))