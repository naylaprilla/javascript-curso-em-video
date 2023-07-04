function parImpar(n) {
    if(n%2 == 0) { // ação
        return 'Par!'//retorno se verdadeiro
    } else {
        return 'Impar!' //retorno se falso
    }
}
let resultado = parImpar(11) // chamada da função
console.log(resultado) // só aparece o resultado no console, se tiver um console.log