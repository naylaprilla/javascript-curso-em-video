

function adicionarNumero(event) {
    event.preventDefault();

    const numeroDigitado = document.querySelector('#numero')
    const btnAdicionar = document.querySelector('#btnAdicionar')
    const listaNumeros = document.querySelector('#numList')
    const resultado = document.querySelector('#resultado')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        numeroDigitado.value = numeroDigitado.value.substr(0, numeroDigitado)
    }
    console.log(numeroDigitado)

}