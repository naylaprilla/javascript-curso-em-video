function soma(n1=0, n2=0) {
    return n1 + n2;
};

console.log(soma(2, 5));

// Se não definirmos os dois parâmetros o resultado será NaN, porque o primeiro será um número e ou outro será undefined.
// Mas também é possível resolver esse problema usando soma(n1=0, n2=0), 
// dessa forma do JS entende que se um numero não for definido ele vale 0.