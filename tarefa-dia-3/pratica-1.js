/*
Prática 1: Implementando meu primeiro comando de repetição

1) Certifique-se que você está na pasta tarefa-dia-3 no terminal
2) Abra o arquivo pratica-1.js com o VSCODE ou o editor de código de sua preferência
3) Este problema nós trabalhamos em aula: exibir números de 1 até n
4) Considere que o dado de entrada para executar o código é o número n. 
Ou seja, uma variável n que vai armazenar o valor do número final que queremos exibir
5) Neste problema, você deverá utilizar o comando while
6) Exiba todos os números de 1 a n. Por exemplo, se o valor de n for 9, você deverá exibir o seguinte resultado na tela com console.log():
7) Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub
*/

let i = 1
let num = 20

while (i <= num) {
    console.log(i)
    i = i + 1   // Poderia ser apenas i++
}