/** 
 * crear el numero 10
 * crear el numero 20
 * 
 * Comparar si el numberOne es mayor que el numberTwo
 * 
 * Si son iguales mostrar por consola Son iguales
 * Si no es mayor retornar por consola verdadero
 * Si no es mayor retornar por consola un falso
 * 
 * 
 * END
 * 
*/


const numberOne = 10
const numberTwo = 20

// 19 == '19' // true
// 19 === '19' // false porque uno es string y el otro es number


if (numberOne === numberTwo) {

    console.log('Son iguales')

} else if (numberOne > numberTwo) {
    console.log("Es mayor")
} else {
    console.log("Es menor")
}

numberOne > numberTwo ? console.log('El numberOne existe') : console.log('El numberOne No existe')

