let num= document.getElementById('fnum')            //Cria a variavel num que Recebe o elemento digitado pelo usuario referenciado por id como fnum
let lista = document.getElementById('flista')       //Cria a lista que Recebeo elemento por id como flista
let res = document.getElementById('res')            //Variavel contendo a ação final que vai aparecer na tela
let valores = []                                    //Array da lista


function isNumero(n){                               //Funcao que ja converte para number e checa se o numero é compativel com a condicao
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inLista(n, l) {                        //Funcao que checa se  o numero já esta na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){                       //Funcao que associa as duas outras funcoes e insere o valor na tabela
    if(isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)                 //Associar o item criado como option na pagina para ser filho de lista
            res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()                             //Recentralizar o cursor no input 
}
function finalizar(){                                       //A funcao finalizar vai entregar o resultado final
    if(valores.length == 0){                        //Checar se o tem algo no array
        alert('Adicione valores antes de finalizar')
    }else{

        let total = valores.length                  //Criacao das variaveis que serao exibidas no final
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){                //Percorrendo o array e adicionando os valores as variaveis
            soma += valores[pos]
            if(valores[pos] > maior){
            maior = valores[pos] 
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
            media = soma / total                    
        }
        res.innerHTML = ''                          //Antes de executar ele limpa o espaco
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`            //Mostra os resultados na div res(resultado)
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media} </p>`
    }

   
}