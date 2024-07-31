let verificar = document.querySelector('#verificar')
verificar.addEventListener('click', clickar)
function clickar() {
    let agora = new Date()
    let nascimento = agora.getFullYear()
    let caixanascimento = document.querySelector('#txtano')
    let result = document.querySelector("#result")
    if (caixanascimento.value.length == 0 || caixanascimento.value > nascimento) {
        alert('[ERRO] Tente inserir os dados novamente!')
        return 0
    } 
    let caixasexo = document.getElementsByName('radsexo')
    let idade = nascimento - Number(caixanascimento.value)
    let genero = ''
    let img = document.createElement('img')

    if (caixasexo[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebehomem.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovemhomem.png')

        } else if (idade < 50) {
            img.setAttribute('src', 'adultohomem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosohomem.png')
        }

    } else if (caixasexo[1].checked) {
        genero = 'Feminino'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebemulher.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src','jovemmulher.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'adultomulher.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosomulher.png')
        }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `É do gênero ${genero} e tem ${idade} anos de idade`
    result.appendChild(img)

    

}
