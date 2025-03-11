let valores = [5, 9, 10, 8, 7]
/*
console.log(valores)
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}