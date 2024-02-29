alert("Calculadora de temperatura")
let celsius = +prompt(`Hola, ingresa la temperatura en grados Celsius`)

let kelvin = (celsius + 273.15) //se calcula los grados en kelvin
let fahrenheit = (celsius * 9 / 5) + 32 //se calcula los grados en fahrenheit

//se muestran la equivalencia en distintas unidades de medición de temperatura
document.write(`<p class='text-center mt-5'><u>${celsius}°C</u> equivale tanto a <u>${kelvin}°K</u>, como a <u>${fahrenheit}°F</u></p>`)