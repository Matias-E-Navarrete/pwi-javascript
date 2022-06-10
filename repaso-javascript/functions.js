const users = [
    {
        id: 1,
        name: "Javier"
    },
    {
        id: 2,
        name: "Brian"
    },
    {
        id: 3,
        name: "Romi"
    },
    {
        id: 4,
        name: "Rodri"
    }
]

// funcion tradicional
function getUsers() {
    // cuerpo de la funcion
    console.log('Buscando usuarios...')

    return users
}
// const usuarios = getUsers()

// arrow function
const findUsers = () => {
    return users
}

/**  
 * Esta funcion comentada es equivalente o igual a la de la linea 30
 *  const findUsers = () => users
*/

// console.log('Buscando usuarios...')
// const usersFound = findUsers()
// console.log(usersFound)


/**
 * Callback es el uso de una funcion dentro de una funcion
 * Callback es el paso por parametro de una funcion dentro de una funcion
 * Callback es retorno de una funcion dentro de una funcion
 */
// console.log(findUsers())
// app.get('/home', (req, res) => {
//     res.send('Bienvenidos al servidor')
// })

const print = (valor) => {
    console.log("usersFound", usersFound)
    console.log(valor)
}

const getAllUsers = () => {
    const usersFound = users
    print(usersFound)
    return usersFound
}

getAllUsers()

