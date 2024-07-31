let event_velocity = document.querySelector('#verificar')
event_velocity.addEventListener('click', clickar)

function clickar() {
    let velocity = Number(document.querySelector('#txtvelocidade').value)
    let result = document.querySelector('#res')
   
    if (velocity <= 60) {   
        result.innerHTML = `<p>Sua velocidade : ${velocity}.<strong>Você está no limite!</p>`  

    } 
    
    else {
        result.innerHTML = `<p>Sua velocidade: ${velocity}.<strong>Você ultrapassou o limite!</p>`
        
    }
}