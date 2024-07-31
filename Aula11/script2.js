let buton = document.querySelector('#botao')
buton.addEventListener('click', clickar)

function clickar (){
    let pais = document.querySelector('#txtpais').value
    let resultado = document.querySelector('#calcular')
    if (pais == 'Brasil'){
        resultado.innerHTML = `<p>Você é <strong>${pais}eiro`
    } else{
        resultado.innerHTML = `<p>Você <strong>Não é daqui`
    }
}