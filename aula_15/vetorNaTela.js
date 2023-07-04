let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)

// Isso é um percurso em vetores tradicional
for(let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

// Mas é possível simplificar esse código, usando:
for( let i in valores){ //indice e vetor
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
// Para cada posição dentro váriavel composta valores - in é o mesmo que dentro e for é o mesmo que para