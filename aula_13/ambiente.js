/*  Um exemplo de repetição que fazemos no dia a dia:
    function comerPizza(){
        while(temFatia()) {
            comerFatia()
        }
    } 
*/

//Como seria fazer uma repetição sem os laços?
    console.log("Olá, tudo bem?")
    console.log("Olá, tudo bem?")
    console.log("Olá, tudo bem?")
    console.log("Olá, tudo bem?")
    console.log("Olá, tudo bem?")
    console.log("Olá, tudo bem?")
    console.log("Olá, tudo bem?")
// Isso seria muito ruim, muita escrita desnecessária e o código não está funcional porque não está automatizado.

//Para resolver isso, temos as estruturas de repetição (while, do/while e For)
//Laço simples - estrutura de repetição com teste no inicio
    var contador = 1
    while (contador <= 6) {
        console.log(`Passo ${contador}`)
        contador++ //é o mesmo que contador = contador + 1
    }
    console.log('Tudo bem?') 

//Estrutura de repetição com teste no final - primeiro executa o bloco e depois faz o teste lógico
    var contador = 1
    do {
        console.log(`Passo ${contador}`)
        contador++
    } while (contador <= 6) {

    }






