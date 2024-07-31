let botao = document.querySelector('#butao')
botao.addEventListener('click', clickar)

function clickar(){
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passo = Number(document.querySelector('#passo').value)
    let res = document.querySelector('#preparacao')

    if (inicio == 0 || fim == 0 || passo == 0){
        res.innerHTML = 'Impossível Contar!'
        //alert('[ERRO] Faltam dados')

    } else{
        if (passo <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if( inicio < fim){ 
       res.innerHTML =' Contando: <br>'
       for(let c = inicio; c <= fim; c += passo)
        res.innerHTML += ` ${c} \u{1F449}`
    } else{
        res.innerHTML =' Contando: '
       for(let c = inicio; c >= fim; c -= passo)
        res.innerHTML += ` ${c} \u{1F449}`
    }
    }
    res.innerHTML += `\u{1F3C1}`
    
    
    
}