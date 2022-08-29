// Dado um valor, me diga apenas se ele é do tipo number

let valor = '10'         // number
// typeof(variavel) retorna string(string ou number)

let tipoDoValor = typeof(valor) 

if (tipoDoValor === 'number') {
    console.log(`${valor} é do tipo ${tipoDoValor}`)
}

// Outra forma de fazer
if (typeof(valor) === 'number') {
    console.log(`${valor} é do tipo ${typeof(valor)}`)
}