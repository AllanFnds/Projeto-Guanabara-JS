let amigo = {
    nome: 'DoisL',
    sexo: 'M',
    peso: 78.4,
engordar(p=0){
    if(p > amigo.peso){
        console.log('Engordou')
        this.peso += p
        
    } else{
        console.log('Emagreceu')
        
    }
    
}}

amigo.engordar(75)


