/*Ejercicio 1: Filtrar personajes menores de edad
Crear un array de objetos con información de personajes de Los Simpsons, cada
objeto debe contener el nombre, la edad y el rol del personaje. Utilizar el método
filter para obtener un nuevo array que contenga solamente los personajes
menores de 18 años.*/

const simpsons = [
  { nombre: "Bart Simpson", edad: 10, rol: "Hijo" },
  { nombre: "Lisa Simpson", edad: 8, rol: "Hija" },
  { nombre: "Maggie Simpson", edad: 1, rol: "Hija" },
  { nombre: "Homer Simpson", edad: 39, rol: "Padre" },
  { nombre: "Marge Simpson", edad: 36, rol: "Madre" },
  { nombre: "Abraham Simpson", edad: 83, rol: "Abuelo" },
  { nombre: "Patty Bouvier", edad: 36, rol: "Tía" },
  { nombre: "Selma Bouvier", edad: 36, rol: "Tía" },
  { nombre: "Ned Flanders", edad: 40, rol: "Vecino" },
  { nombre: "Rod Flanders", edad: 10, rol: "Hijo" },
]
const menoresDeEdad = simpsons.filter(personaje =>personaje.edad < 18);
console.log(menoresDeEdad);

/*Ejercicio 2: Sumar edades de los personajes
Utilizar el método reduce para sumar las edades de todos los personajes del array
creado en el Ejercicio 1. Mostrar el resultado en la consola.*/

const sumaEdades = simpsons.reduce((total, personaje) => total + personaje.edad, 0); //0 valor inicial , es una suma iterativa
console.log(sumaEdades);


/*Ejercicio 3: Obtener los nombres de los personajes
Utilizar el método map y una función arrow para crear un nuevo array que contenga
solamente los nombres de los personajes del array del Ejercicio 1. Mostrar el nuevo
array en la consola.*/
const nombresPersonajes = simpsons.map(personaje => personaje.nombre);
console.log(nombresPersonajes);

/*Ejercicio 4: Cambiar el rol de los personajes
Utilizar el método map y destructuring para crear un nuevo array a partir del array
del Ejercicio 1, en el cual el rol de los personajes menores de edad sea cambiado a
"Estudiante". Mostrar el nuevo array en la consola.*/

const estudiantes = simpsons.map(({nombre, edad}) => {
  if (edad < 18) {
    return {nombre, edad, rol: "Estudiante"};
  }
  return {nombre, edad, rol: "Adulto"};
});
console.log(estudiantes);

/*Ejercicio 5: Agregar personajes con spread
Crear un nuevo array de objetos con más personajes de Los Simpsons. Utilizar el
operador spread para combinar ambos arrays de personajes en un nuevo array.
Mostrar el array resultante en la consola.*/
const nuevosPersonajes = [
  { nombre: "Milhouse Van Houten", edad: 10, rol: "Amigo" },
  { nombre: "Nelson Muntz", edad: 10, rol: "Bully" },
  { nombre: "Ralph Wiggum", edad: 8, rol: "Hijo del Jefe Gorgory" },
  { nombre: "Edna Krabappel", edad: 40, rol: "Maestra" },
  { nombre: "Krusty el Payaso", edad: 50, rol: "Payaso" },
  { nombre: "Troy McClure", edad: 45, rol: "Actor" },
  { nombre: "Patty Bouvier", edad: 36, rol: "Tía" },
  { nombre: "Selma Bouvier", edad: 36, rol: "Tía" },
  { nombre: "Ned Flanders", edad: 40, rol: "Vecino" },
  { nombre: "Rod Flanders", edad: 10, rol: "Hijo" },
];
const todosLosPersonajes = [...simpsons, ...nuevosPersonajes];
console.log(todosLosPersonajes);