function verificar(){
   var data = new Date()
   var ano = data.getFullYear()

   var fano = document.querySelector('input#txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || fano.value > ano){
    alert('[ERRO], verifique os dados novamente.')
   } else{
    alert('tudo certo')
   }
}