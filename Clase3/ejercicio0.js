
/*Arrays:
Crear un array de números.
Agregar un nuevo número al final del array.
Quitar el último número del array.
Imprimir en la consola el array resultante después de agregar y quitar elementos*/

let numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.push(11);
numeros.pop();
console.log(numeros);
/*Objetos:
Crear un objeto persona con propiedades como nombre , edad y ocupación.
Acceder a la propiedad nombre del objeto persona.
Imprimir en la consola el nombre de la persona.*/

const persona = {
  nombre: "Juan Perez",
  edad: 30,
  profesion: "programador"
};
console.log(persona.nombre);
/*Funciones (convertir a arrow functions):
Crear una función normal que sume dos números. 
Convertir esa función a una arrow function.
Llamar a la función con dos números y mostrar el resultado.*/
let a  = 2 
let b = 3;

let suma = function sumar() {
    return a+b;

};
console.log(suma());
/*Métodos de Array: 
Crear un array de números.
Usar el método find para encontrar el primer número mayor que 3 . 
Usar el método filter para obtener todos los números mayores que 2. 
Usar el método map para duplicar cada número en el array*/

let arraysNum = [123, 32, 2, 4, 11, 10, 15];
console.log("numero mayor a 3  " +arraysNum.find(num => num > 3));
console.log("numeros mayores a 2  " +arraysNum.filter(num => num > 2));
console.log("numeros duplicados  " +arraysNum.map(num => num * 2));

