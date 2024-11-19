function tabuada(){
    var numero = Number(document.getElementById('numero').value)
    var texto = document.getElementById('texto')
    for(var i = 0; i < 11; i++){
        var conta = numero * i
        texto.innerHTML += `${numero} x ${i} = ${conta}`
    }
}