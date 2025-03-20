let num = document.querySelector('input#txtnum');
let list = document.querySelector('select#sellist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado !`
        list.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        
        if(valores[pos] < menor)
            menor = valores[pos]
        
    }
    if(valores.length == 0){
        alert('Adicione valores !!')
    } else {
        let tot = valores.length
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Temos no total ${tot} elementos.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `<p>A soma dos valores foi ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores foi ${media}.</p>`
    }
}
