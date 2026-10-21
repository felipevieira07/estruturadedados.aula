import BinarySearchTree from "./lip/BinarySearchTree.mjs"

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percursoIN = []
let percursoPre = []
let percursoPos = []

//Percurso em-ordem
arvore.inOrderTraversal(val => percursoIN.push(val))
console.log('Percuso em-ordem: ', percursoIN)

//Percuso pré-ordem
arvore.preOrderTraversal(val => percursoPre.push(val))
console.log('Percuso pré-ordem: ', percursoPre)

//Percurso pós-ordem
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log('Percuso pré-ordem: ', percursoPos)

//TESTE DE REMOÇÃO
let percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('ANTES DAS REMOÇÕES: ', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 0
arvore.remove(64)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 64: ', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 1
arvore.remove(1)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 1: ', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 2
arvore.remove(15)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 15: ', percursoREM)

//REMOÇÃO DE UM NODO DE GRAU 2
arvore.remove(48)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 48: ', percursoREM)

percursoREM = []
arvore.preOrderTraversal(val => percursoREM.push(val))
console.log(`O novo valor na raiz é ${percursoREM[0]}`)