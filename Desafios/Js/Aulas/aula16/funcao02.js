function soma(a = 0, b = 0) {
    return a + b
}

console.log(soma(2,5)) 


let v = function(x){
    return x*2
}
console.log(v(5))

function fatorial(n) {
    if(n == 1){
        return  1
    }else{
       return n * fatorial(n-1)
    }

}

console.log(fatorial(5))