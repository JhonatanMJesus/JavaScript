console.log("Vamos calcular a altura média dos jogadores.");
const QtdJogadores = parseInt(prompt("Digite a quantiade de jogadores que tem no time:"));
var soma_altura = 0;
for(let i=1; i <= QtdJogadores; i++) {
    var altura = parseFloat(
        prompt("Informe a altura do jogador " + i + ": ")
    );
    soma_altura = soma_altura + altura;
}
const media_altura = soma_altura / QtdJogadores;
console.log("A altura média dos jogadores é de:" + media_altura.toFixed(2));