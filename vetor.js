let nomes = [] // Vetor em JavaScript

for(let i=1; i <= 5; i++) {
    nomes[i] = prompt("Digite o nome da posição " + i + ":");
}

// Acessando posições de um vetor
console.log("O nome da posição 1 é: " + nomes[1]);
console.log("O nome da posição 2 é: " + nomes[2]);
console.log("O nome da posição 3 é: " + nomes[3]);
console.log("O nome da posição 4 é: " + nomes[4]);
console.log("O nome da posição 5 é: " + nomes[5]);

//Acessando posições com o For
for(i=1; i <= 5; i++) {
    console.log("O nome da posição " + i + " é: " + nomes[i])
}
