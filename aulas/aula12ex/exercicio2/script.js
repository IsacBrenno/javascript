function verificar(){
   var data = new Date()
   var ano = data.getFullYear()

   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   
   if (fano.value.length == 0 || fano.value > ano){
    alert('[ERRO], verifique os dados novamente.')
   } else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      img = document.createElement('img')
      img.setAttribute('id', 'foto')
      genero = ''

      if (fsex[0].checked){
         genero = 'Homem'
            //criança
            if (idade >= 0 && idade < 10){
               img.setAttribute('src', 'crianca-m.jpg')
            }  //jovem
               else if(idade < 21){

            }  //adulto
                  else if(idade < 50){

            } //idoso
                     else{}

         }else if (fsex[1].checked){
         genero = 'Mulher'
            //criança
            if (idade >= 0 && idade < 10){

            }  //jovem
               else if(idade < 21){

               }  //adulto
                  else if(idade < 50){

                  }  //idoso
                     else{

                     }
         }  
         res.style.textAlign = 'center'
         res.innerHTML = `Foi verificado ${genero} com ${idade} anos.`
         res.appendChild(img)
      }
}