/*Funções embutidas no JavaScript

push(): Adiciona um ou mais elementos ao final de um array.
pop(): Remove o último elemento de um array.
shift(): Remove o primeiro elemento de um array.
unshift(): Adiciona um ou mais elementos no início de um array*/

let numeros = [1, 2, 3, 4];
numeros.forEach(num => {
    console.log(num);
});

numeros.push(6);
console.log(numeros);

numeros.pop();
console.log(numeros);

/*Pilhas precisam seguir a regra LIFO = Last In First Out.
Métodos Básicos da pilha:
push(): Adiciona um item no topo da pilha
pop(): Remove o item no topo da pilha
peek(): Retorna o item que está no topo da pilha sem removê-lo
isEmpty(): Verifica se a pilha está vazia (retorno em boleano)*/