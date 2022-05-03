
function suma(num1, num2) {
    const total = num1 + num2
    console.log(total)
}

function multiplicacion(x, y) {
    return x * y
}

function resta(x, y) {
    return x - y
}

function division(x, y) {

    if (y == 0) {
        // throw new Error('no se puede dividir por cero')
        console.log('no se puede dividir por cero')
    }
    return x / y
}

let x = 10;
let y = 5

suma(x, y)
resta(x, y)
multiplicacion(x, y)
division(x, y)
