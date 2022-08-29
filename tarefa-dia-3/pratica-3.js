/*
Prática 3: Exiba os ímpares

Crie um código no arquivo pratica-3.js que começando com um número inteiro > 0, 
exiba com console.log() todos os números ímpares até chegar neste número. 
Se quiser, pode chamar a variável que vai armazenar esse número inteiro de n. 

Veja um exemplo abaixo.

Dado de entrada:
    16
Valores exibidos:
    1
    3
    5
    7
    9
    11
    13
    15
*/

let n = 21
let i = 1

while (i <= n) {
    console.log(i)
    i += 2 // que é a mesma coisa que i = i + 2
}
