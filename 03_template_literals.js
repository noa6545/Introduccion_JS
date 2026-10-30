let nombre = "Laura";
let edad = 20;
console.log("Hola, me llamo", nombre, "y tengo", edad, "años."); // Con el operador , //
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`); // Con template literals //

let a = 5;
let b = 3;
console.log("Resultado: " + a + b); //Unió los valores (concadenó)//
console.log("Resultado:", (a+b)); 
console.log(`Resultado: ${a+b}`);

let producto = "Mouse";
let cantidad = 2;
let precio = 15000;
console.log(`Producto: ${producto}
Cantidad: ${cantidad}
Precio Unitario: $${precio}
Total a pagar: $${cantidad * precio}`);