function buscaSenquencial(vetor,fnComp){
    for(let i = 0; i < vetor.length;i++){
        if(fnComp(vetor[i]))return i
    }
    return -1
}

function comparaNome(obj){
    return obj.first_name === "FELIPE"
}

import {objNomes} from './data/vetor-obj-nomes.mjs'

console.log("Posição de FELIPE:",buscaSenquencial(objNomes,comparaNome))