const nome = 'Junior'
const sobrenome = 'Piacentini'
const idade = 30
const peso = 84
const altura = 1.80
let imc
let anoNascimento

imc = peso / (altura * altura)
anoNascimento = 2023 - idade 

console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso, 'Kg')
console.log('tem', altura, 'de altura e seu IMC é', imc)
console.log("nasceu no ano de", anoNascimento)
console.log("FIM DO CÁLCULO")