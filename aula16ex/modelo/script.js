let eventoAdicionar = document.querySelector('#addbutton')
eventoAdicionar.addEventListener('click', clickar)

let array = []


let eventoFinalizar = document.querySelector('#buttonfinal')
eventoFinalizar.addEventListener('click', finalizar)



function clickar() {
    let inputNumber = Number(document.querySelector('#innumber').value)
    if (inputNumber < 1 || inputNumber > 100 || inputNumber == array) {
        alert('O número não corresponde')
        return 0
    } 

    array.push(inputNumber)
    
    let addtabela = document.querySelector('#seltabela')
    
    let option = document.createElement('option')
    option.text = `Valor ${inputNumber} adicionado`
    addtabela.appendChild(option)
    
}


function finalizar(){
    let paragrafo = document.querySelector('#paragrafo')
    let tamanho = array.length
    let maior = Math.max(...array)
    let menor = Math.min(...array)
    let soma = 0
    if(array == 0){
        alert(`Insira um número para finalizar`)
        return 0
    }
    for(i in array){
        soma += array[i]
    }

    let media = (soma / tamanho).toFixed(3)
   
    paragrafo.innerHTML = `Ao temos ${tamanho} <br> O maior valor informado foi ${maior} <br> O menor valor informado foi ${menor} <br>
    A soma é ${soma} <br> A média é ${media} `

    

    

    


    
    
    
    
    
}















