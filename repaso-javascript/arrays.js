const users = [
    {
        id: 1,
        name: "Marcos"
    },
    {
        id: 2,
        name: "Mateo"
    },
    {
        id: 3,
        name: "Luis"
    },
    {
        id: 4,
        name: "Gianni"
    }
]

const products = [
    {
        id: 1,
        name: "Microondas",
        cantidad: 0
    },
    {
        id: 2,
        name: "Heladera",
        cantidad: 10
    },
    {
        id: 3,
        name: "Cocina",
        cantidad: 0
    },
    {
        id: 4,
        name: "Televisor",
        cantidad: 15
    },
    {
        id: 5,
        name: "Lavarropa",
        cantidad: 50
    },
    {
        id: 6,
        name: "Heladera",
        cantidad: 0
    },
]

/**
 * ==============
 * Array Methods
 * ==============
 */

// MAP: Recorro el Array completo y retorno un un array. Se usa para modificar el array que recorro. Retorna un array
// con la misma cantidad de elementos
const newArrayUsers = users.map((user) => {
    if (user.name === 'Mateo') {
        return {
            ...user,
            edad: 18
        }
    }
    return {
        ...user,
        edad: 17
    }
})
console.log("newArrayUsers", newArrayUsers)

// FOREACH: Similar al map, pero no necesita retornar nada
let sumaDeEdades = 0;
newArrayUsers.forEach(user => sumaDeEdades += user.name)

console.log("la suma de edades de los usuario es de: ", sumaDeEdades, " El promedio de edad es de: ", sumaDeEdades / newArrayUsers.length)


// FIND: Recorre el array hasta la primer coincidencia. Para saber cuando hay coincidencia el metodo necesita
// una condición para saber si coincide o no. Retorna un elemento (solo el que coincide)

const heladera = products.find(product => product.name === 'Heladera')
console.log("heladera", heladera)


// FILTER: Recorre el array completo y retorna un array con las coincidencias. Para esto necesita una condicion
const heladeras = products.filter(product => product.name === 'Heladera')
console.log("Las heladeras encontradas son", heladeras)

// NECESITO!!! Listado de productos con stock
const productosConStock = products.filter(product => product.cantidad > 0)
console.log("productosConStock", productosConStock)

// NECESITO!!! Listado de productos sin stock
const productosSinStock = products.filter(product => product.cantidad <= 0)
console.table(productosSinStock)

//LUIIIIIIIIIS NECESITO URGENTE PARA AYER sumar los 10 unidades a los microondas y 5 al resto a los productos sin stock
const productosConNuevoStock = productosSinStock.map(product => {
    /**
     * 
     * {
     *  cantidad: 20
     * ojos: 'verdes'
     * edad: 88
     * }
     */

    if (product.name === 'Microondas') {
        return {
            ...product,
            cantidad: body.cantidad ? body.cantidad : product.cantidad,
        }
    }
    return {
        ...product,
        cantidad: product.cantidad + 5
    }

})

console.table(productosConNuevoStock)
console.log(productosConNuevoStock)
