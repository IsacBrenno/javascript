function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora > 0 && hora < 12){
    img.src = './imagens/manha-pq.jpg'
    document.body.style.background = '#EEDABE'
} else if(hora >= 12 && hora < 18){
    img.src = './imagens/tarde-pq.jpg'
    document.body.style.background = '#8C430E'
} else{
    img.src = './imagens/noite-pq.jpg'
    document.body.style.background = '#455248'
}
}