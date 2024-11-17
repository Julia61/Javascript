function verificador(){
    var ano = new Date()
    var anoHoje = ano.getFullYear()
    var nascimento = document.getElementById('nascimento')
    var res = document.getElementById('res')
    
    if(nascimento.value.length == 0 || nascimento.value > anoHoje){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('sex')
        var idade = anoHoje - Number(nascimento.value)
        var  img = document .createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''

        if(sexo[0].checked){
            genero = 'homem'
            if(idade < 10){
                img.setAttribute('src', 'imagens/criança-menino.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            }
            else if (idade < 60){
                img.setAttribute('src', 'imagens/homem.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }

        else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                img.setAttribute('src', 'imagens/criança-menina.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            }
            else if(idade < 60){
                img.setAttribute('src', 'imagens/mulher.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        res.append(img)
    }
    
    
}