function gerarTabuada(event) {
    event.preventDefault();

    const numeroDigitado = document.querySelector('#numero');
    const selectTabuada = document.querySelector('#selTab');
    
    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let numero = Number(numeroDigitado.value);
        let contador = 1
        selectTabuada.innerHTML = ''

         for( let contador = 1; contador <= 10; contador++){
            let item = document.createElement('option')  
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `selectTabuada${contador}` 
            selectTabuada.appendChild(item)    
        }
    }

}