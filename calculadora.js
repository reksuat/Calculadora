const { areaCirculo, areaTriangulo, areaRetangulo } = require("./area");
const numPerfeito = require("./perfeito");
const prompt = require("prompt-sync")({ sigint: true });
let num1 =parseFloat(prompt("primeiro número: "));
let num2 = parseFloat(prompt("segundo número: "))
console.log("Caso seja encontrar valor de área digite: \n (1)Para área de círculo (raio) \n (2)Para área do triângulo (base e altura)\n (3)Para área do retângulo (base e altura) \n (4)Número perfeito");
let conta = prompt ("Qual conta irá ser feita: ")
function soma(a,b) {
    return a+b
}
function subtracao(a,b) {
    return a-b
}
function multiplicar(a,b) {
    return a*b
}

function divisao(a,b) {
    if (b === 0) {
        return'a divisão não pode ser zero.';
    }
    return a/b
}
function porcentagem(a,b) {
    return a/100*b
}
let numeros=num1&& num2
    if (!isNaN(numeros) && typeof numeros === 'number') {
        
        if (conta=="+"|| conta=="soma" || conta=="mais") {
            console.log(soma(num1,num2))
        }
        else if (conta=="-" || conta=="subtração" || conta=="menos") {
            console.log(subtracao(num1,num2))
        }
        else if (conta=="*"|| conta=="x" || conta=="vezes") {
            console.log(multiplicar(num1,num2))
        }
        else if (conta=="/" || conta=="divisão") {
            console.log(divisao(num1,num2))
        }
        else if (conta=="%" || conta=="porcentagem") {
            console.log(porcentagem(num1,num2))
        }else if (conta=="1") {
            console.log(areaCirculo(num1));
        }else if (conta=="2") {
            console.log(areaTriangulo(num1,num2));
        }else if (conta=="3") {
            console.log(areaRetangulo(num1,num2));
        }else if (conta=="4") {
            console.log(numPerfeito(num1));
        }
        else {
            console.log("não é um operador válido");
        }
    }else{
        console.log("não é um número valido");
    }