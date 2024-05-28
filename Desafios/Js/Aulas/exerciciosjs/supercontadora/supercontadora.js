function contar() { 
    let inicio = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ) {
     window.alert('[ERRO] Faltam dados!')        
    }else{
       res.innerHTML = 'Contando....'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p<= 0) {
        alert('Passo invalido, considerando passo 1')
        p = 1
       }
       if(i < f){
       for(var c = i ; c <= f; c += p){
             res.innerHTML += `${c} `             

       }

        }else{
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${C}`
               }   

        
            }
    

        }


}