let resistividade = 0.0172 //  0,0172 Ω. mm²/m
let comprimento = 0
let areaTransversal = 2.5 //O valor minimo é um para não dividir por zero
let resistencia = 0

resistencia  = ( resistencia * comprimento ) / areaTransversal

console.log("O valor da resistencia é = ", resistencia)