function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!')

        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')// criando um elemento diretamente pelo javaScript
            img.setAttribute('id', 'foto')
            //setAttribute serve para verificar se é homem ou mulher
            if(fsex[0].checked) { //Aqui estamos verficando se é homem ou mulher e no else if internos a faixa etária
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'foto-bebe-m.png')

                } else if (idade < 21) {
                    img.setAttribute('src', 'foto-jovem-m.png')

                } else if (idade < 50) {
                    img.setAttribute('src', 'foto-adulto-m.png')

                } else {
                    img.setAttribute('src', 'foto-idoso-m.png')

                }
            }

            if(fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'foto-bebe-f.png')

                } else if (idade < 21) {
                    img.setAttribute('src', 'foto-jovem-f.png')

                } else if (idade < 50) {
                    img.setAttribute('src', 'foto-adulto-f.png')

                } else {
                    img.setAttribute('src', 'foto-idoso-f.png')
                }

        }
        res.style.textAlign = 'center' // aqui estamos alinhando o texto ao centro da tela
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Texto que aparece no card da tela
        res.appendChild(img) // Imagem que aparece no card de acordo com a img.setAtribute que foi definida anteriormente nas condições.
    }
}