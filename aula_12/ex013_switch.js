
autenticado = true

switch (autenticado) {
    case true:
        console.log('Usuário logado')
        break
    case false:
        console.log('Usuário não autenticado')
}

sexo = 'sem genero'

switch (sexo) {
    case 'feminino':
        console.log('Bem Vinda!')
        break
    case 'masculino':
        console.log('Bem Vindo!')
        break
    case 'sem genero':
        console.log('Bem vinde!')
}

mes = 'Maio'

switch(mes) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        console.log('Verão!')
        break

    case 'Abril':
    case 'Maio':
    case 'Junho':
        console.log('Outono!')
        break

    case 'Julho':
    case 'Agosto':
    case 'Setembro':
        console.log('Inverno!')
        break

    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('Primavera')
}

numMes = 4
nomeMes = ""

switch (numMes) {
    case 1:
        nomeMes = "Janeiro"
        break
    case 2:
        nomeMes = "Fevereiro"
        break
    case 3:
        nomeMes = "Março"
        break
    case 4:
        nomeMes = "Abril"
        break
    case 5:
        nomeMes = "Maio"
        break
    case 6:
        nomeMes = "Junho"
        break
    case 7:
        nomeMes = "Julho"
        break
    case 8:
        nomeMes = "Agosto"
        break
    case 9:
        nomeMes = "Setembro"
        break
    case 10:
        nomeMes = "Outubro"
        break
    case 11:
        nomeMes = "Novembro"
        break
    case 12:
        nomeMes = "Dezembro"
    default:
        nomeMes = "Mês Inesistente"
}
console.log(nomeMes)

/* Como direcionar um usuário para uma página diferente
tipoUsuario = 'Adolescente'

switch (tipoUsuario) {
    case 'Adolescente':
        window.location.href = 'homejovem.html'
        break
    case 'Adulto':
        window.location.href = 'home.html'
}
*/

cargo = 'gerente'
salario = 2000

switch (cargo) {
    case 'gerente':
        salario *= 1.15
        break
    case 'supervisor':
        salario *= 1.10
        break
    default:
        salario *= 1.05
        
}
console.log(salario)
