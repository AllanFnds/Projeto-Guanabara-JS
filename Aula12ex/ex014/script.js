function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data= new Date()
    let hora= data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#f7f48f'
    } else if (hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#d17e1f'
    } else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#474747'
    }


}
