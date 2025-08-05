// Suma dos números
function sumar(a, b) {
  return a + b; // Devuelve la suma de a y b
}

// Resta dos números
function restar(a, b) {
  return a - b; // Devuelve la resta de a menos b
}

// Multiplica dos números
function multiplicar(a, b) {
  return a * b; // Devuelve el producto de a por b
}

// Divide dos números
function dividir(a, b) {
  return a / b; // Devuelve la división de a entre b
}

// Eleva un número a una potencia
function potencia(base, exponente) {
  return base ** exponente; // Devuelve base elevado al exponente
}

// Obtiene el resto de una división
function resto(a, b) {
  return a % b; // Devuelve el resto de dividir a entre b
}

// Calcula la raíz cuadrada de un número
function raizCuadrada(numero) {
  return Math.sqrt(numero); // Devuelve la raíz cuadrada del número
}

// Devuelve el valor absoluto de un número
function valorAbsoluto(numero) {
  return Math.abs(numero); // Convierte el número a positivo si es negativo
}

// Redondea un número al entero más cercano
function redondear(numero) {
  return Math.round(numero); // Redondea hacia arriba o abajo según el decimal
}

// Genera un número aleatorio entre 0 y 1
function numeroAleatorio(){
  return Math.random(); // Devuelve un número decimal entre 0 y 1
  }

  // Une dos textos en uno solo
function concatenar(texto1, texto2) {
  return texto1 + texto2; // Junta los dos textos
}

// Devuelve la cantidad de caracteres en el texto
function longitud(texto) {
  return texto.length; // Cuenta cuántos caracteres tiene el texto
}

// Convierte el texto a mayúsculas
function aMayusculas(texto) {
  return texto.toUpperCase(); // Transforma todo el texto a mayúsculas
}

// Convierte el texto a minúsculas
function aMinusculas(texto) {
  return texto.toLowerCase(); // Transforma todo el texto a minúsculas
}

// Devuelve el carácter en una posición específica
function caracterEn(texto, indice) {
  return texto[indice]; // Devuelve el carácter en el índice indicado
}

// Invierte el texto
function invertir(texto) {
  return texto.split('').reverse().join(''); // Separa, invierte y vuelve a unir el texto
}

// Cuenta cuántas veces aparece un carácter
function contarCaracter(texto, caracter) {
  return texto.split(caracter).length - 1; // Divide por el carácter y cuenta los cortes
}

// Elimina todos los espacios del texto
function sinEspacios(texto) {
  return texto.replace(/\s/g, ''); // Reemplaza todos los espacios por nada
}

// Verifica si el texto es un palíndromo
function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/\s/g, ''); // Limpia el texto
  return limpio === limpio.split('').reverse().join(''); // Compara con su versión invertida
}

// Pone en mayúscula la primera letra de cada palabra
function capitalizar(texto) {
  return texto
    .split(' ') // Separa el texto por palabras
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitaliza cada palabra
    .join(' '); // Une las palabras de nuevo

}

// Suma todos los números del array
function sumaArray(arr) {
  return arr.reduce((total, num) => total + num, 0); // Acumula la suma de todos los elementos
}

// Calcula el promedio de los números del array
function promedioArray(arr) {
  return sumaArray(arr) / arr.length; // Divide la suma total entre la cantidad de elementos
}

// Ordena el array de menor a mayor
function ordenarAscendente(arr) {
  return arr.slice().sort((a, b) => a - b); // Copia y ordena el array
}

// Devuelve los números mayores que el valor dado
function mayoresQue(arr, numero) {
  return arr.filter(n => n > numero); // Filtra los elementos mayores al número
}

// Une dos arrays en uno solo
function unirArrays(arr1, arr2) {
  return arr1.concat(arr2); // Junta los dos arrays
}

// Encuentra el número más grande del array
function maximo(arr) {
  return Math.max(...arr); // Usa el operador spread para pasar los valores a Math.max
}

// Encuentra el número más pequeño del array
function minimo(arr) {
  return Math.min(...arr); // Usa el operador spread para pasar los valores a Math.min
}

// Cuenta cuántas veces aparece un elemento
function contarElemento(arr, elemento) {
  return arr.filter(e => e === elemento).length; // Filtra y cuenta los elementos iguales
}

// Elimina los elementos duplicados del array
function sinDuplicados(arr) {
  return [...new Set(arr)]; // Convierte el array en un conjunto (Set) que no permite duplicados
}

// Invierte el orden de los elementos
function invertirArray(arr) {
  return arr.slice().reverse(); // Copia y revierte el array
}

// Devuelve el valor de la propiedad "nombre"
function obtenerNombre(obj) {
  return obj.nombre; // Accede directamente a la propiedad
}

// Cambia el valor de la propiedad "edad"
function actualizarEdad(obj, nuevaEdad) {
  obj.edad = nuevaEdad; // Actualiza la propiedad con el nuevo valor
  return obj;
}

// Agrega una nueva propiedad con valor null
function agregarPropiedad(obj, nombrePropiedad) {
  obj[nombrePropiedad] = null; // Crea una nueva propiedad con nombre dinámico
  return obj;
}

// Elimina una propiedad del objeto
function eliminarPropiedad(obj, nombrePropiedad) {
  delete obj[nombrePropiedad]; // Elimina la propiedad indicada
  return obj;
}

// Cuenta cuántas propiedades tiene el objeto
function contarPropiedades(obj) {
  return Object.keys(obj).length; // Obtiene las claves y cuenta cuántas hay
}

// Verifica si el objeto tiene una propiedad específica
function tienePropiedad(obj, nombrePropiedad) {
  return obj.hasOwnProperty(nombrePropiedad); // Devuelve true si existe la propiedad
}

// Devuelve un array con todos los valores del objeto
function obtenerValores(obj) {
  return Object.values(obj); // Extrae todos los valores del objeto
}

// Compara si dos objetos son iguales
function compararObjetos(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2); // Convierte a texto y compara
}

// Crea una copia del objeto
function copiarObjeto(obj) {
  return { ...obj }; // Usa el spread operator para copiar todas las propiedades
}

// Une dos objetos en uno solo
function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 }; // Las propiedades del segundo sobrescriben las del primero
}


