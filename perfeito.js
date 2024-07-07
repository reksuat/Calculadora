module.exports= numPerfeito
function numPerfeito(n1) {
    let numeros=0;
    for (let i = 1; i < n1; i++) {
        if (n1 % i==0) {
            numeros+=i;
        }
    }if(numeros==n1){
        return"número perfeito"
    }else{
        return"não é número perfeito"
    }
}