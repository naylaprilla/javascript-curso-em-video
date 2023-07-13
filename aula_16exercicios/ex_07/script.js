const numeroDigitado = document.querySelector('#numero')
const listaNumeros = document.querySelector('#numList')
const resultado = document.querySelector('#resultado')
let valores = []


function isNumber(numero) { // verifica se o numero digitado está entre 1 e 100
    if(Number(numero) >= 1 && Number(numero) <= 100) {
        return true 
    } else {
        return false
    }
}

function inList(numero, lista){ // 
    if(lista.indexOf(Number(numero)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionarNumero(event) {
    event.preventDefault();

    if (isNumber(numeroDigitado.value) && !inList(numeroDigitado.value, valores)) {
        valores.push(Number(numeroDigitado.value)) //adicionar os numeros digitados pelo usuário à lista.
        let item = document.createElement('option') // cria dinamicamente um elemento html pelo JS
        item.text = `Valor ${numeroDigitado.value} adicionado.` //aqui é o valor que o item vai ter
        listaNumeros.appendChild(item) // aqui conseguimos ver o número adicionado na lista que aparece na div resultado
        resultado.innerHTML = ''   
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    numeroDigitado.value = '' // apaga os números depois que o botão adicionar é clicado
    numeroDigitado.focus() // volta o foco para dentro do input

}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maiorNumero = valores[0]
        let menorNumero = valores[0]
        let soma = 0
        let media = 0

        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maiorNumero) {
                maiorNumero = valores[posicao]
            }
            if (valores[posicao] < menorNumero) {
                menorNumero = valores[posicao]  
            }
        }
                
        media = soma / total

        resultado.innerHTML = '' // zera o valor da div resultado
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maiorNumero}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menorNumero}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}