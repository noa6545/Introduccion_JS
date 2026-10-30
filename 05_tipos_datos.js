let nombre = "Susanna";
console.log(typeof nombre);  //Variable string porque esta entre comillas

let edad = 25;
let precio = 19.99;
console.log(typeof edad); //number

let esMayorDeEdad = true;
console.log(typeof esMayorDeEdad); //boolean

let direccion = null;
console.log(typeof direccion); // "object" (esto es un error historico en JavaScript)

let telefono;
console.log(typeof telefono); //undefined

let id = Symbol("id");
console.log(typeof id); //symbol

let persona = {nombre: "Ana", edad: 25};
console.log(typeof persona); //object