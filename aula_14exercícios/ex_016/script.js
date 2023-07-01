   function contar(event) {  
    event.preventDefault();

    let pontoInicial = document.querySelector("#inicio");
    let pontoFinal = document.querySelector('#final');
    let intervaloDePassos = document.querySelector('#passos');
    let resultado = document.querySelector('#resultado');
       
    if(pontoInicial.value.length == 0 || pontoFinal.value.length == 0 || intervaloDePassos.value.length == 0){
        /* alert('Erro, faltam dados!'); */
        resultado.innerHTML = "Impossível contar!";
    } else {
        resultado.innerHTML = "Contando ... <br>";
        let valorInicial = Number(pontoInicial.value);
        let valorFinal = Number(pontoFinal.value);
        let valorIntervalo = Number(intervaloDePassos.value);

        if(valorIntervalo <= 0) {
            alert('Passo inválido! Considerando PASSO = 1');
            valorIntervalo = 1;
        };

        if(valorInicial < valorFinal){ //contagem crescente
            for(let contador = valorInicial; contador <= valorFinal; contador += valorIntervalo){
                resultado.innerHTML += ` ${contador} \u{1F449}`;
            };
        } else { //contagem decrescente
            for(let contador = valorInicial; contador >= valorFinal; contador -= valorIntervalo){
                resultado.innerHTML += ` ${contador} \u{1F449}`;
            };            
        };
        resultado.innerHTML += `\u{1F3C1}`;

    };
    

};