function contar(){

    var txtinicio = document.querySelector('input#txtinicio');
    var inicio = Number(txtinicio.value);

    var txtfim = document.querySelector('input#txtfim');
    var fim = Number(txtfim.value);

    var txtpasso = document.querySelector('input#txtpasso')
    var passo = Number(txtpasso.value)

    var res = document.querySelector('div#res')
    
    while(inicio <= fim){
        inicio = inicio + passo;
        res.innerHTML = 'contando: '
        res.innerHTML = inicio
    }
}