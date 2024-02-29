alert("ingresar dos números diferentes y mayores a cero")
let n1 = +prompt("ingresa tu primer numero entero")
let n2 = +prompt("ingresa tu segundo numero entero")

let suma = n1 + n2 //variable de suma
let resta = n1 - n2 //variable de resta
let multiplicacion = n1 * n2 //variable de multiplicación
let division = (n1 / n2).toFixed(2) //variable de división con decimales fijados en 2 máximo
let modulo = (n1 % n2) //variable de calculo de modulo entre 2 numeros

document.write(`<p>el resultado de su suma es: <strong> ${suma} </strong></p>`) //se muestra la suma
document.write(`<p>el resultado de su resta es: <strong> ${resta} </strong></p>`)//se muestra la resta
document.write(`<p>el resultado de su multiplicación es: <strong> ${multiplicacion} </strong></p>`)//se muestra la multiplicación
document.write(`<p>el resultado de su división es: <strong> ${division} </strong></p>`)//se muestra la división
document.write(`<p>el resultado de su modulo es: <strong> ${modulo} </strong></p>`)//se muestra el modulo
