let nome = 'Juliano'
let idade = 11

// Concatenando com sinal de "+"
if (idade >= 18) {
	console.log(nome + ' Ok, Pode jogar!')
} else {
	console.log(nome + ', Não pode jogar, não insista!')
}

// Concatenando com sinal de ","
if (idade >= 18) {
	console.log(nome , 'Ok, Pode jogar!')
} else {
	console.log(nome , ', Não pode jogar, não insista!')
}

// Template Strings
if (idade >= 18) {
	console.log(`${nome} Ok, Pode jogar!`)
} else {
	console.log(`${nome} , Não pode jogar, não insista!`)
}