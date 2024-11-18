function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    if(!inicio || !fim){
        res.innerHTML = 'Impossivel contar!'
        return;
    }

    if(passo <=0){
        alert('Passo inválido! Considerando PASSO 1 ⚠️');
        passo = 1;  
    }
    if(inicio < fim){
        for(var i = inicio; i < fim; i += passo){
            res.innerHTML += `${i} 👉` 
            
        } 
    }
    res.innerHTML += '🏁';
}