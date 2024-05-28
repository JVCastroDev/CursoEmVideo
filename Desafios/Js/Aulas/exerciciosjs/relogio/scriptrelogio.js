function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML= `Agora são ${hora} horas e ${min} minutos`
    
    if(hora >= 0 && hora < 12){
        //BOM DIA!!
        imagem.src= 'fotomanha.png'
        document.body.style.background = '#e2cd9f'

    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        imagem.src = 'fototarde.png'
        document.body.style.background= '#706257'
    }else{
        //Boa noite !
        imagem.src = 'fotonoite.png'
        document.body.style.background='#4F1154'
    }
}
