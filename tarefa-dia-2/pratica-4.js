/*
Prática 4 (Opcional): Resolvendo mais problemas com programação
Um cliente que vende produtos INTERNACIONAIS e NACIONAIS conseguiu extrair alguns dados de seu programa financeiro. 
O problema é que esse programa retorna os dados na forma de MAPAS e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, 
verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. 
Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

Base de dados que o cliente passou para você:

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

Copie essa base para o arquivo pratica-4.js e escreva um programa que resolve o problema do cliente e exibe 
as informações dos produtos e o valor aplicado os impostos devidos. Você deve testar o seu código com os 3 produtos. 
Não esqueça do de sempre: testar o código, ver se ele está funcionando e depois subir ele no GitHub.

Dica 1: lembre-se do que falamos no dia 1. Programar é errar e consertar. É SEMPRE experimentando e "futucando". 
É ser uma pessoa desbravadora, que futuca e vai tentando tudo de quanto é jeito até acertar. 
Experimente o console.log(), execute o código e veja o que aparece na tela. 
Começa tentando exibir as informações de cada produto. 
Lembrando que pra executar o código você digita node nomedoarquivo.js no terminal.

Dica 2: {"nome": "camiseta", "valor": 100.00, "internacional": true} é um TIPO DE DADO 
que você ainda não conhece, pois não abordamos em aula. 
Por isso, este é o momento de exercitar a pesquisa no Google e ir obtendo autonomia. 
Fique à vontade de pesquisar sobre OBJETOS JAVASCRIPT para obter um entendimento de como utilizá-lo. 
Para acessar ou alterar as informações das variáveis desse tipo você utiliza 
nomedavariavel["nome"], nomedavariavel["valor"], nomedavariavel["internacional"] 
ou nomedavariavel.nome, nomedavariavel.valor, nomedavariavel.internacional. 
Altere as informações e depois tente exibir com console.log(). 
Veja se realmente foram alteradas ao ver o que foi exibido com o console.log().

Dica 3: resolver problemas é SEMPRE BABY-STEPS (passos de bebê). Não existe nenhuma pessoa programadora do mundo que não siga esse processo. 
AS MELHORES SEMPRE FAZEM ISSO, UM PASSO DE CADA VEZ, DIVIDIR PARA CONQUISTAR. Pra quem está começando, este método é ainda mais importante! 
Começa fazendo algo bem simples primeiro. Testa e veja se funcionou. Funcionou? Não funcionou? Deu algum erro? 
Pesquisa o que foi que deu errado e corrige. Corrigiu? Vai pro próximo passo. E assim em diante.

Dica 4: tranquilize-se. A 1ª vez que coloca a mão no código é sempre mais difícil. 
Tudo mais confuso na cabeça, as coisas estão se materializando, o 
entendimento, a compreensão e prática é que vai te permitir a evolução. 
Aos poucos você vai pegando o jeito e depois você verá que tudo fica mais tranquilo e fluido. 
Como falamos no 1º dia, quando a pessoa aprende a dirigir é o mesmo processo! 
Tudo mais difícil no início, depois fica natural e rápido.

Dica 5: para aplicar 20% de impostos, você deve multiplicar por 1.2. Para aplicar 12%, você deve multiplicar por 1.12. 
Lembre-se que o computador só entende de 2 coisas: NÚMEROS e TEXTO. 
Quando trabalhar com número, 12%, 12 reais, 20 dólares não existe como valor válido no código. 
Tudo é só número, então tem que ser 12 (ou 0.12, ou 1.12 no caso do problema) e não 12%. 
Nós usamos esses símbolos apenas pra mostrar pro usuário. Ou seja, esses símbolos só tem função para humanos.

Dica 6: você vai precisar criar comandos condicionais que verificam se o produto é internacional ou não. 
Se for internacional, deve exibir o nome do produto e o valor com os impostos de 20%. 
Se for nacional, deve exibir o nome do produto e o valor com os impostos de 12%.
*/

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
    let calculoImposto = produtoA.valor * 1.2
    console.log(`Produto é Internacional e o Valor do imposto é ${calculoImposto}`)
} else {
    let calculoImposto = produtoA.valor * 1.12
    console.log(`Produto é Nacional e o Valor do imposto é ${calculoImposto}`)
}

if (produtoB.internacional == true) {
    let calculoImposto = produtoB.valor * 1.2
    console.log(`Produto é Internacional e o Valor do imposto é ${calculoImposto}`)
} else {
    let calculoImposto = produtoB.valor * 1.12
    console.log(`Produto é Nacional e o Valor do imposto é ${calculoImposto}`)
}

if (produtoC.internacional == true) {
    let calculoImposto = produtoC.valor * 1.2
    console.log(`Produto é Internacional e o Valor do imposto é ${calculoImposto}`)
} else {
    let calculoImposto = produtoC.valor * 1.12
    console.log(`Produto é Nacional e o Valor do imposto é ${calculoImposto}`)
}