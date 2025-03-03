let agora = new Date() //Hora atual 
let hora = agora.getHours //transformando a variavel na hora atual
if (hora > 12 && hora < 18){
    console.log('Boa Tarde!')
}else if (hora > 18){
    console.log('Boa noite!')
} else{
    console.log('Bom dia!')
}
