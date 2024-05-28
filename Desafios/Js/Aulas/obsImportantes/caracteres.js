/*

     E   "&&"               
v && v -> v
v && f -> f
f && ? -> f


    OU = "||"
v || f -> v
v || v -> f
f || f -> f
f || v -> v

    XOR  "^"   O ou exclusivo pode ser simulado pela diferença != pois se verdadeiro é diferente de falso é
v ^ f -> v
v ^ v -> f
f ^ f -> f
f ^ v -> v
        //Funcao do ou exclusiva
            xor = (a,b) =>{
                return (a && !b) ||(!a && b)
            }
v != f xor
v != = f
!f = v

*/
