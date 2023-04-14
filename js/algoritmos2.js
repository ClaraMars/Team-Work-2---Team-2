const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

const A2E3 = () => {
  // Bucle for para imprimir 4 filas
  for (let i = 0; i < 4; i++) {
    // Inicializa una cadena vacía para construir la fila
    let fila = "";

    // Bucle for para imprimir 4 asteriscos en cada fila
    for (let j = 0; j < 4; j++) {
      // Concatena un asterisco a la cadena de la fila
      fila += "*";
    }

    // Imprime la fila completa con un salto de línea
    console.log(fila);
  }
};
