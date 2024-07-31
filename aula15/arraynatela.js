const array = [2,7,5,3,5]
array.sort()
array.push(20)
/*
for(let posicao = 0; posicao < array.length; posicao++){
    console.log(`A posição ${posicao} e  o valor é ${array[posicao]}`)
}
*/
for(let posicao in array){
    console.log(`A posição ${posicao} e valor ${array[posicao]}`)
}