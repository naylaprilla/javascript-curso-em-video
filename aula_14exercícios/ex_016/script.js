function contar() {      
    let pontoInicial = document.querySelector("input#inicio");
    let pontoFinal = document.querySelector('input#final');
    let intervaloDePassos = document.querySelector('input#passos');
    let resultado = document.querySelector('div#resultado');
        
    if(pontoInicial.value.length == 0 || pontoFinal.value.length == 0 || intervaloDePassos.value.length == 0){
        alert('Erro, faltam dados!');
    } else {
        resultado.innerHTML = "Contando ..."
        let valorInicial = Number(pontoInicial.value);
        let valorFinal = Number(pontoFinal.value);
        let valorIntervalo = Number(intervaloDePassos.value);

        for(let contador = valorInicial; contador <= valorFinal; contador += valorIntervalo){
            resultado.innerHTML += `${contador}`
        }
    };
    
};