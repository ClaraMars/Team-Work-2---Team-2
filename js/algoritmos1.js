const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

const A1E3 = () => {
  // Preguntamos la temperatura al usuario
  let temperatura = prompt("¿Cuál es la temperatura exterior?");

  // Si temperatura es menor a 15 mostrar "Warm up"
  if (temperatura < 15) {
    alert("Warm up");
  }
  // Si temperatura está entre 15 y 25 mostrar "Enjoy the weather!"
  else if (temperatura >= 15 && temperatura <= 25) {
    alert("Enjoy the weather!");
  }
  // Si temperatura es mayor a 25 mostrar "Cool down"
  else if (temperatura > 25) {
    alert("Cool down");
  }
  // Si se introduce una temperatura no válida mostrar mensaje de error
  else {
    alert("Introduce una temperatura válida!");
  }
};
// LLamada a la función para el tiempo
//A1E3();

const A1E8 = () => {
  // Solicita al usuario los números y la operación a realizar
  const num1 = parseFloat(prompt("Introduce el primer número:"));
  const num2 = parseFloat(prompt("Introduce el segundo número:"));
  const operacion = prompt(
    "Introduce la operación a realizar (suma, resta, multi, divide):"
  );

  // Verifica si num2 es cero si se está realizando una división

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
      // Comprueba que el divisor no se igual a 0
      if (operacion === "divide" && num2 === 0) {
        console.log("No se puede dividir entre 0.");
      } else {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      }
      break;
  }
};
// Llamada a la función para la calculadora
//A1E8();
