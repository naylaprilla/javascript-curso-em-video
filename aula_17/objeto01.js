let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4,
    engordar(peso=0){ // é possível adicionar funções dentro de uma variável
        console.log('Engordou')  
        this.peso += peso
    }
}

amigo.engordar(2) // Aqui está passando o peso que a pessoa, ou José no caso, engordou 2kg
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`) // aqui estamos pegando o nome e o peso do objeto amigo
//console.log(amigo)


let num = 8
num **= 2
console.log(num)