
let frutas = ["Manzana", "Banana"]
let sinFrutas = []
console.log(frutas[0])

// METODO PUSH: Agrega un elemento (siempre al ultimo)
frutas.push("Naranja")
console.log(frutas)

// METODO POP: Quita un elemento (siempre el ultimo)
frutas.pop()
console.log(frutas)

// METODO CANTIDAD ELEMENTOS: 
console.log("con frutas", frutas.length)
console.log("sin frutas", sinFrutas.length)

let edades = [15, 18, 25, 54, 7, 5];

const mayoresEdad = edades.filter(function (edad) {
    if (edad >= 18) {
        return edad
    }
})

console.log("mayoresEdad", mayoresEdad)