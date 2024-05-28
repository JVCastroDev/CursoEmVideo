let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
for(let c=0; c < valores.length;c++){
    console.log(`A posicao ${[c]} tem o valor ${valores[c]}`)
}

for(let pos in valores) {
    console.log(valores[pos])
}