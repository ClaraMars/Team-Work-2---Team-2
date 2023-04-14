const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

const generarMatricula = () => {
  // Genera un número de cuatro dígitos aleatorio y lo convierte a una cadena de caracteres, rellenando con ceros a la izquierda si es necesario
  const numeros = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  // Define un array de letras permitidas en la matrícula, excluyendo las vocales, la letra 'Q' y la letra 'Ñ'
  const letrasPermitidas = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Crea una cadena de caracteres vacía para almacenar las letras de la matrícula
  let letras = "";

  // Genera tres letras aleatorias y las añade a la cadena de letras de la matrícula
  for (let i = 0; i < 3; i++) {
    // Obtiene un número aleatorio entre 0 y la longitud del array de letras permitidas
    const indiceAleatorio = Math.floor(Math.random() * letrasPermitidas.length);

    // Añade la letra correspondiente al índice aleatorio obtenido al array de letras de la matrícula
    letras += letrasPermitidas[indiceAleatorio];
  }

  // Combina el número de la matrícula con las letras generadas para formar la matrícula completa
  const matricula = numeros + letras;

  // Devuelve la matrícula generada
  return matricula;
};

// Función que pide al usuario un número de matrículas y genera esa cantidad de matrículas aleatorias
const A3E5 = () => {
  // Pide al usuario la cantidad de matrículas que desea generar
  const cantidad = parseInt(prompt("¿Cuántas matrículas deseas generar?"));

  // Comprueba si la cantidad introducida es un número válido y mayor que cero
  if (isNaN(cantidad) || cantidad <= 0) {
    // Si la cantidad no es válida, muestra un mensaje de error
    console.log("Cantidad inválida.");
  } else {
    // Si la cantidad es válida, genera la cantidad de matrículas aleatorias indicada y las muestra por consola
    for (let i = 0; i < cantidad; i++) {
      const matricula = generarMatricula();
      console.log(matricula);
    }
  }
};

// Función flecha que genera la cantidad de matrículas aleatorias indicada por el usuario
const A3E52 = () => {
  // Pide al usuario la cantidad de matrículas que desea generar
  const cantidad = parseInt(prompt("¿Cuántas matrículas deseas generar?"));

  // Comprueba si la cantidad introducida es un número válido y mayor que cero
  isNaN(cantidad) || cantidad <= 0
    ? console.log("Cantidad inválida.")
    : // Genera la cantidad de matrículas aleatorias indicada y las muestra por consola
      Array.from({ length: cantidad }, () =>
        console.log(
          // Genera un número de cuatro dígitos aleatorio y lo convierte a una cadena de caracteres, rellenando con ceros a la izquierda si es necesario
          Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0") +
            // Genera tres letras aleatorias y las añade a la cadena de la matrícula
            [...Array(3)]
              .map(
                () => "BCDFGHJKLMNPQRSTVWXYZ"[Math.floor(Math.random() * 20)]
              )
              .join("")
        )
      );
};
