# Curso de lógica de programção com JavaScript 
##### Plataforma Curso em Vídeo
#### Professor: Gustavo Guanabara

### Técnologias
 - JavaScript
 - Html5
 - CSS3

Anotações:

    Instalamos a extensão node exec para ver os console.log no output do terminal no VSCode basta clicar no f8 e deve mostrar todos os console.log dos arquivos .js ou clique em run code (CTRL + ALT + N) E o código será mostrado no terminal.

    No módulo D aprendemos Condições com if e else - simples(if), compostas(if else), aninhadas(else if) e multiplas(switch case)

    O switch não deve ser usado para testar intervalos, mas é perfeito para percorrer e encontrar valores pontuais.

### Repetições Módulo E

    Estruturas de controle de repeticao com teste lógico no inicio(while), estrutura de repetição com teste lógico no final(do while) e estrutura de repetição com controle(for). 
    Condição / laço / repetição
    while em inglês é o mesmo que enquanto

    Como usar o modo Debug do VsCode:
     1- Clique em Run and Debug;
     2- Crie um breackpoint(ponto de inicio) na frente da variável que você quer inspecionar;
     3- Com a tecla f12 é possível dar um passo a frente e assim acompanhar cada passo com a setinha amarela;
     Em baixo da tela, na aba Debug Console, também é possível acompanhar o passo a passo escrito da execussão da instrução do programa.

     >>> Exercícios feitos na pasta aula_14exercícios

     Exercício 1 -  Exemplo: Contar de 5 até 12 pulando de 2 em 2 passos - ex_016
        A lógica usada foi o if para fazer a verificação se os campos haviam recebido os dados necessários para fazer a contagem,
        No else,  mostramos o resultado na div resultado usando o resultado.innerHTML = algumaCoisa,
        Criamos novas variáveis para usar no for e utilizar o intervalo na contagem, exemplo de 2 em 2, ou o que o usuário definir,
        Usamos unicode emoji list para mostrar os emojis entre os números da contagem `\u{1F449}`, 
        *importante notar que esse código do unicode só funciona entre crases,
        Para exibir na tudo isso na tela, usamos novamente o resultado.innerHTML, mas com o += para que o JS concatene todas os resultados anteriores com esses.

     Exercício 2 - Tabuada - ex_017

    
### Módulo F 

Variáveis simples - guarda um valor por vez.
Variáveis compostas - é capaz de guardar vários valores em uma mesma estrutura.

        ex.: vaga automovel = [carro1, carro2, carro3] índice: 0, 1, 2

Observações:
    - O primeiro elemento do array é sempre 0.
    - É escrito entre colchetes e cada elemento separado por vírgula
    - Vetor ou array é o nome atribuido à variável composta, dentro dela temos os elementos.
    - O índice ou chave guarda a ordem de cada elemento dentro do array
    - Conteúdo ou valor de cada elemento.
    - .length percorre o array e retorna ou define o número de elementos em um determinado array. 
        - No JS o .length **não é um método** é um atributo, por isso não pode ter parenteses ao lado dele.
    - .push adiciona ou empurra um elemento à array
    - Outra forma de adicionar valores ao array seria:
        num[3] = 6 // assim será criado automaticamente o elemento de indice 3 e valor dele será 6
    - O método .sort() organiza os elementos da array em ordem crescente

    ex.: let num = [5, 8, 4] índice: 0, 1, 2
    >>> Exercício feito no arquivo aula_15

##### Percurso em vetores tradicional

Usando o for podemos fazer um percurso tradicional em um vetor ou array. Mas é possível simplificar esse código, usando:

    for(indice in vetor){} 
        - Para cada posição dentro váriavel composta valores
        - in é o mesmo que dentro e for é o mesmo que para
        - indice e vetor
        - index é o mesmo que índice
    >>> aula_15/vetorNaTel.js

    - O método indexOf(7) procura um valor dentro do vetor retorna o index dele.

