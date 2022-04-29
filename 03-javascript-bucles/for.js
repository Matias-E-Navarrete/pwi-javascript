
const frutas = ['Manzana', 'Naranja', 'Durazno', 'Banana']

/****
 * 1.Declara como trabajar (
 * cual es el iterador: let iteracion = 0, 
 * cual es la condicion de corte para el bucle: iteracion < frutas.length, 
 * como se incrementa el iterador: iteracion++)
 * 2. Ejecuta las instrucciones
 * 3. aumenta el iterador en 1
 * 4. analiza condicion de corte
 * 5. Si la condicion no se cumple vuelve al paso 2 || si se cumple la condicion corta el bucle
 */

// for (let iteracion = 0; iteracion < frutas.length; iteracion++) {
//     console.log('Comienza la iteracion')
//     console.log('====================')
//     console.log('iteracion' + iteracion)
//     console.log('La fruta es: ' + frutas[iteracion])
//     console.log('Termina la iteracion \n')
// }

/****
 * EJERCICIO 1: 
 * Crear un array que contenga edades
 * iterar ese array completo y mostrar un mensaje por consola que indique la edad de la persona
 * 
 */
// const edades = [5, 10, 15, 25, 35, 45]

// for (let edad = 0; edad < edades.length; edad++) {
//     console.log('Las edades son: ' + edades[edad] + ' Años')
// }



/****
 * EJERCICIO 2: 
 * ... del array anterior mostrar si la persona es o no mayor de edad indicando entre parentesis cual es la edad
 * 
 */
// const edades2 = [10, 30, 40, 50]

// for (let i = 0; i < edades.length; i++) {
//     console.log('Edad de la persona: ', edades[i])
//     if (edades[i] < 18) {
//         console.log('menor de edad')
//     } else {
//         console.log('Mayor de edad')
//     }
// }

/****
 * EJERCICIO 3: 
 * Del siguiente array const frutas = ['Manzana', 'Naranja', 'Durazno', 'Banana', 'Anana']
 * mostrar por consola solo las frutas Manzana y Banana
 * 
 */

// for (let index = 0; index < frutas.length; index++) {
//     if (frutas[index] === 'Manzana' || frutas[index] === "Banana") {
//         console.log('La fruta es: ', frutas[index])
//     }
// }



/****
 * EJERCICIO 4: 
 * Del siguiente array const numeros = [2,3,4,5,6,24,35,41,17]
 * mostrar solo los numeros pares
 * 
 */

//  const numeros = [2,3,4,5,6,24,35,41,17]

//  for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 2 === 0){
//         console.log('Los pares son: ', numeros[index])
//     } 
// }


/****
 * EJERCICIO 5: 
 * Del siguiente array const numeros = [2,3,4,5,6,24,35,41,17]
 * guardar en el array numerosPares los elementos pares e
 * imprimir por consola el array numerosPares completo (en el mismo console.log)
 * 
 */

// const numbers = [2, 3, 4, 5, 6, 24, 35, 41, 17];
// const pairNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         pairNumbers.push(numbers[i]);
//     }
// }

// console.log("pairNumbers", pairNumbers);

// Un filter es practimante la implementacion de un for mas una condicion y retorna un arreglo nuevo con los valores
// que cumplen la condicion.
//  let numerosPares = numbers.filter(numero => numero % 2 === 0 )

// console.log("numerosPares", numerosPares)


// Strings son considerados objetos iterables
const saludo = 'Hola como estas?'
for (let index = 0; index < saludo.length; index++) {
    console.log(saludo[index])

}
