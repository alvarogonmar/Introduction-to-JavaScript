//Strings

//mas importancia
const product = 'Monitor 20 inches'
//menos importancia
const product2 = String('Monitor 30 inches')
const product3 = new String('Monitor 50 inches')


//usar comillas dobles
const product4 = 'Monitor 20\"'

const tweet = 'Learning JavaScript with Web Development course'

console.log(product) //typeof para saber que tipo de objeto tiene
console.log(product2)
console.log(product3)

// Verificar cuantas letras tiene tu texto
console.log(tweet.length)

//indexOf //Comprobar si una palabra existe en un texto (retorna posicion)
console.log(tweet.indexOf('JavaScript'))

//Includes (retorna True o False)
console.log(tweet.includes('JavaScript'))