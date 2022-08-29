let numero = 12

// Operador: %
// saber se é par ou impar
// faz o resto por 2. Se o resto for 0, é par. Se não for 0, é impar.

if (numero % 2 == 0) {
    console.log(`${numero} é par!`)
} else {
    console.log(`${numero} é impar!`)
}

// Outra forma de fazer:
let ehpar = numero % 2 == 0

if (ehpar) {
    console.log(`${numero} é par!`)
} else {
    console.log(`${numero} é impar!`)
}

// Outra forma de fazer:
let ehimpar = numero % 2 != 0

if (ehimpar) {
    console.log(`${numero} é impar!`)
} else {
    console.log(`${numero} é par!`)
}
