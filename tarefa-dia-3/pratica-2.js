/*
Prática 2: Fazendo a tabuada

1) Novamente, certifique-se que você está na pasta tarefa-dia-3 no terminal
2) Abra o arquivo pratica-2.js com o VSCODE ou o editor de código de sua preferência
3) Este problema nós trabalhamos em aula: criar uma tabuada
4) Considere que o dado de entrada para executar a tabuada é o número fixo que vamos efetuar as multiplicações
5) Nossa tabuada deverá ir de 1 ao 10
6) Neste problema, você deverá utilizar o comando while
7) No código, exiba a tabuada no terminal. Por exemplo, se o valor de entrada for 9, 
você deverá exibir o seguinte resultado na tela com console.log():
*/

let tabuada = 5
let contador = 1

while (contador < 11){
    let resultado = tabuada * contador
    console.log(`${tabuada} * ${contador} = ${resultado}`)
    contador++
}

/*
Outra forma de fazer:

const multiplicador = 9
let i = 1

while (i <= 10) {
    const resultado = i*multiplicador
    const valorExibido = `${multiplicador} X ${i} = ${resultado}`
    console.log(valorExibido)
}
 */