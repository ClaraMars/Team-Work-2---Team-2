const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};
//Bloque1, ejercicio3
//preguntamos la temperatura al usuarioeratura h
let temperatura = prompt("¿Cuál es la temperatura exterior?");
//si temperatura > 15 alert warm up!!
if (temperatura < 15) {
  alert("Warm up");
} else if (temperatura >= 15 && temperatura <= 25) {
  alert("Enjoy the weather!");
} else if (temperatura > 25) {
  alert("Cool down");
  //en caso de que el usuraio introduzca una temperatua no valida!
} else alert("Introduce una temperatura válida!");

//Bloque1, ejercicio8
// Solicita al usuario los números y la operación a realizar
const num1 = parseFloat(prompt("Introduce el primer número:"));
const num2 = parseFloat(prompt("Introduce el segundo número:"));
const operacion = prompt(
  "Introduce la operación a realizar (suma, resta, multi, divide):"
);

// Verifica si num2 es cero si se está realizando una división
if (operacion === "divide" && num2 === 0) {
  console.log("No se puede dividir entre cero.");
} else {
  // Realiza la operación y muestra el resultado por consola
  switch (operacion) {
    case "suma":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "resta":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "multi":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "divide":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      console.log("Operación no válida.");
      break;
  }
}
