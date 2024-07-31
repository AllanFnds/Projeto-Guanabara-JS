let eventoButao = document.querySelector('#butao')
eventoButao.addEventListener('click', clickar)


function clickar(){
    let number = Number(document.querySelector('#numero').value)
    let selectTabuada = document.querySelector('#tabselect')
    
    if (number == 0){
        window.alert('Por favor, digite um número!')
    } else{
    selectTabuada.innerHTML = ''
    for(let c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${number} x ${c} = ${number*c}`
        
        selectTabuada.appendChild(item)

    }
} 
       
    

    
}