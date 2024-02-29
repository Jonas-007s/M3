alert("Calculadora de días")
let dias = +prompt(`ingresa una cantidad de días para calcular a cuantos años, semanas y días equivale`)

let anios = Math.floor(dias / 365) //se calcula cuantos años son
let semanas = Math.floor((dias - (anios * 365))/7) //se calcula cuantas semanas son restandoles lo equivalente a años pero en días
let dia = Math.floor(dias - (anios * 365) - (semanas * 7)) //se calcula cuantas semanas son restandoles lo equivalente a años pero en días y lo equivalente a semanas pero en días

//se muestra a cuanto equivale el valor ingresado por el usuario
document.write(`<p class='text-center mt-5'><strong>${dias} días</strong> equivalen a <strong>${anios} años</strong>, <strong>${semanas} semanas</strong> y <strong>${dia} días</strong></p>`)
