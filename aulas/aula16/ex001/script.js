function adicionar(n){
    let num = document.querySelector('input#txtnum')
    if (num == num || num > 100){
        let valor = Number(num.value)
        alert('Valor inválido ou já encontrado na lista!!')
    }
}