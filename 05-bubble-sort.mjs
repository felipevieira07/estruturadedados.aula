function bubbleSort(vetor){

    let trocou

    do{
        trocou = false

        for(let i = 0;i < vetor.length - 1;i++){
            if(vetor[i]>vetor[i+1]){
                [vetor[i], vetor[i+1]] = [vetor[i+1],vetor[i]];
                trocou = true
            }
        }

    }while(trocou);
}

let num = [77,88,99,66,44,55,33,22,11,0]

bubbleSort(nums);
console.log(nums);