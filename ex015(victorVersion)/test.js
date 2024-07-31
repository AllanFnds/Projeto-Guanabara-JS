let verificar = document.querySelector('#verificar')
verificar.addEventListener('click', clickar)
function clickar() {
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let nascimento = document.querySelector('#anoNascimento')
    let error = document.querySelector("#error")
    let caixasexo = document.getElementsByName('radsexo')
    let idade = anoAtual - Number(nascimento.value)
    let genero;

    if (idade > 120 || nascimento.value > anoAtual) {
        error.style.display = 'block'
        return 0
    }

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
        error.style.display = 'none'

    } else if (caixasexo[1].checked) {
        genero = 'Feminino'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebemulher.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovemmulher.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'adultomulher.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosomulher.png')
        }
        error.style.display = 'none'
    }
    error.innerHTML = `É do gênero ${genero} e tem ${idade} anos de idade`
    error.appendChild(img)
}