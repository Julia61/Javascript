function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-menino.jpg')
            } else if(idade < 21){
                //jovem 
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criança-menina.jpg')
            } else if(idade < 21){
                //jovem 
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    
}