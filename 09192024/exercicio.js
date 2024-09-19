/*Escreva uma função em JavaScript que recebe um array de números inteiros
e retorna a soma dos números pares do array.*/

function somaPares(array) {
    let soma = 0;
    array.forEach(par=> {
        if (par % 2 === 0) {
            soma += par;
        };
    });
    return soma;
}

let numeros = [1, 3, 5, 8, 10];
console.log(somaPares(numeros));