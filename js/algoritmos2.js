const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};   

//Bloque2, ejercicio3
// Bucle for para imprimir 4 filas
for (let i = 0; i < 4; i++) {
    // Bucle for para imprimir 4 asteriscos en cada fila
    for (let j = 0; j < 4; j++) {
      // Imprime un asterisco sin salto de línea
      process.stdout.write('*');
    }
    // Imprime un salto de línea después de cada fila
    console.log();
  }
