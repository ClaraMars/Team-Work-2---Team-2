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


//EJERCICIO 1
//Escribe un programa que pregunte al usuario los límites máximo y mínimo, y genere un array de 20 números aleatorios entre esos valores, 
//ambos incluidos. Luego mostrará el valor más alto y el más bajo dentro del array, con el siguiente formato (por consola):
//• min value: nnn
//• max value: mmm

const a3e1 = () => {
  // function to add a leading 0 for positive and negative numbers
  function pad(num, size) {
    if (num < 0) {
      // check if the number is negative
      const withoutMinus = String(num).slice(1);
      return "-" + withoutMinus.padStart(size, "0"); 
    }
    return String(num).padStart(size, "0");
  }
  // User input maximum and minimum value
  let min, max;
  while (true) {
    min = prompt("Enter the minimum value:");
    max = prompt("Enter the maximum value:");
  
    if (!isNaN(min) && !isNaN(max)) { 
      min = parseInt(min);
      max = parseInt(max);
      break;
    } else {
      alert("Both values must be numbers. Please try again.");
    }
  }
  
  // Generate tweenty integer random numbers
  const array = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  // Include the given minimum and maximum values in the array
  console.log(array);
  // add leading zeros to the number
  let resultMin = pad(Math.min(...array), 3);
  let resultMax = pad(Math.max(...array), 3);

  // Logged the result
  console.log(`min value: ${resultMin}`);
  console.log(`max value: ${resultMax}`);
};

// a3e1();

//EJERCICIO 2
// Escribe un programa que recoge la hora del sistema, y al cargar la página pregunta al usuario su nombre. A continuación, muestra un saludo personalizado (alerta) en función de la hora, teniendo en cuenta los siguientes rangos:
// • Entre las 5:00 y las 11:59 → “Good Morning, {userName}!”
// • Entre las 12:00 y las 17:59 → “Good Afternoon, {userName}!”
// • Entre las 18:00 y las 04:59 → “Good Evening, {userName}!”
// Los saludos deberán estar predefinidos en un objeto con el identificador “greeting”.

const a3e2 = () => {

  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();

  let userName = prompt("¿Cuál es tu nombre?");

  if (hour >= 5 && hour <= 11 && minutes >= 00 && minutes <= 59) {
      alert(`Good Morning, ${userName}!`);
  } else if (hour >= 12 && hour <= 17 && minutes >= 00 && minutes <= 59) {
      alert(`Good Afternoon, ${userName}!`);
  } else if (hour >= 18 || hour <= 4 && minutes >= 00 && minutes <= 59) {
      alert(`Good Evening, ${userName}!`);
  };
};

//a3e2();

//EJERCICIO 3
// Escribe un programa que genere 10 códigos hexadecimales aleatorios (no repetidos), y escriba en la consola “Hello World!” del color aleatorio generado.

const a3e3 = () => {
  // Array para almacenar los códigos generados
  let codigosGenerados = [];

  // Bucle while para generar los 10 códigos
  while (codigosGenerados.length < 10) {
    // Generar un código hexadecimal aleatorio
    let codigoAleatorio =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Comprobar si el código generado ya existe en el array
    if (!codigosGenerados.includes(codigoAleatorio)) {
      // Si no existe, agregarlo al array
      codigosGenerados.push(codigoAleatorio);
    }
  }
  codigosGenerados.forEach((codigo) => {
    console.log("%cHello World!", `color: ${codigo}`);
  });
};

a3e3();

// EJERCICIO 4
// Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se determina por la siguiente tabla.
// Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido, lanzando una alerta “Valid DNI” o “The data entered is wrong”.

const a3e4 = () => {
  let dni = prompt("Introduce tu DNI");

  let dniNumberRest = parseInt(dni.slice(0, 8)) % 23;
  let dniLetter = dni.slice(8).toString();

  let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  let validDni = /^[0-9]{8}[A-Z]$/;
  if (validDni.test(dni) == true) {

    if (dniLetter === array[dniNumberRest]) {
      alert("Valid DNI.");
    } else {
      alert("The data entered is wrong.");
    }
  } else {
    alert("Please, check your data. DNI was not valid.");
  }
};

//a3e4();

//EJERCICIO 4 Bonus
const a3e4Bonus = () => {
  let max = 99999999;
  let min = 00000001;
  let randomDniNumber = Math.floor(Math.random() * (max - min + 1) + min);

  let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  console.log(`El DNI aleatorio es: ${randomDniNumber}${array[randomDniNumber % 23]}.`);

};

//a3e4Bonus();

//EJERCICIO 5
// Escribe un programa que genera matrículas aleatorias, sabiendo que:
// • Una matrícula válida debe estar compuesta por 4 números y 3 letras.
// • Los números pueden ir desde 0000 hasta 9999
// • Las letras pueden ir desde BBB hasta ZZZ
// • No se permiten vocales
// • No se permiten las consonantes Ñ ni Q
// El número de matrículas aleatorias será a petición del usuario.

const a3e5 = () => {

  //Función que genera matrículas aleatorias
  const matriculaGenerator = () => {
      let numbers = randomNumbers(9999, 0000).toString();
      numbers = numbers.padStart(4, "0");
      
      let exclude = [69, 73, 79, 81, 85];

      let letter = String.fromCharCode(randomNumbers(90, 66), randomNumbers(90, 66), randomNumbers(90, 66));
      while (exclude.some(num => letter.includes(String.fromCharCode(num)))) {
          letter = String.fromCharCode(randomNumbers(90, 66), randomNumbers(90, 66), randomNumbers(90, 66));
      };
  
      let matricula = numbers + letter;
      console.log(matricula);
  };

  let matriculaNum = parseInt(prompt("¿Cuántas matrículas quieres?"));
  for (let index = 0; index < matriculaNum; index++) {
      matriculaGenerator();
  }
};

//a3e5();

//EJERCICIO 6
//Recopila 20 citas aleatorias de una temática a tu elección, y almacénalas en un array. A continuación, investiga las funciones setInterval y setTimeout para generar una cita aleatoria, que se mostrará en consola, cada 10 segundos, durante 2 minutos.

const a3e6 = () => {
  const citas = [
    "La mente que se abre a una nueva idea jamás volverá a su tamaño original",
    "Mentalidad Mamba, Ser la mejor version de ti mismo",
    "La excelencia no es un acto, sino un hábito. No hacemos lo correcto una vez, lo hacemos todos los días",
    "No puedo cambiar la dirección del viento, pero puedo ajustar mis velas para llegar a mi destino",
    "La locura es hacer lo mismo una y otra vez esperando resultados diferentes",
    "No esperes que las cosas sucedan, haz que sucedan",
    "Si haces algo con pasión, no importa lo que sea, el éxito llegará",
    "Si tienes miedo de fallar, entonces probablemente fallarás",
    "El talento es el don natural, la habilidad es el trabajo duro",
    "El fracaso no es fracaso si aprendes de él",
    "No tengo miedo a tomar decisiones. Usted no puede estar paralizado por el miedo al fracaso o usted nunca emprenderá nada",
    "La paciencia es la clave para el éxito",
    "El odio no puede impulsar el odio. Sólo el amor puede hacer eso",
    "La creatividad sin estrategia se llama arte. La creatividad con estrategia se llama publicidad",
    "La fuerza no proviene de la capacidad física. Viene de una voluntad indomable",
    "La imaginación es más importante que el conocimiento",
    "La verdadera prueba no es que evitas este fracaso, porque no puedes. Es si lo permites definirte o no",
    "Soy un soñador. Creo que si no sueñas, estás vivo, pero no vives",
  ];
  
  // Generar una cita aleatoria cada 10 segundos
  let contador = 0;
  const intervalo = setInterval(() => {
    const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
    console.log(citaAleatoria);
    contador++;
    if (contador === 12) {
      clearInterval(intervalo);
    }
  }, 10000);
  
  // Detener el intervalo después de 2 minutos
  setTimeout(() => {
    clearInterval(intervalo);
    console.log("Fin del programa");
  }, 120000);
  
};

//a3e6();

//EJERCICIO 7
//Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array. A continuación filtra todos los números impares, ordenando los pares de mayor a menor.

const a3e7 = () => {
  let min = 0;
  let max = 500;
  // Generate tweenty integer random numbers
  const array = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  console.log(array);

  // Filter even numbers and sort in descending order
  let pair = array.filter((n) => n % 2 === 0);
  let pairSorted = pair.sort((a, b) => b - a);
  console.log(pairSorted);
};

// a3e7();

//EJERCICIO 8
// Escribe un programa para jugar a la carta más alta. Para el juego se utilizará la baraja de poker, por lo que:
// • Habrá 2 arrays, uno con los palos (clubs, hearts, spades, diamonds) y otro con las cartas.
// • El array de cartas incluirá las siguientes, cuyo valor está ordenado de mayor a menor:
// ACE, KING, QUEEN JACK, 10, 9, 8, 7, 6, 5, 4, 3, 2.
// Se juega contra la banca, con un saldo inicial de 500 €. En cada mano se preguntará al usuario
// cuanto quiere apostar.
// Si la apuesta del usuario supera su saldo, se le notificará y se le pedirá que apueste de nuevo. Si la apuesta es válida, se generarán 2 cartas aleatorias,
// se mostrarán por consola, y se indicará una alerta “You win!”, “You lose” o “Draw”, según corresponda. Se sumará o restará el saldo en función del resultado.
// Al final de cada mano se le preguntará si quiere seguir jugando, siendo “y” la opción para seguir, y “n” la opción para retirarse.
// En caso de perder todo el saldo, la partida finaliza. En caso de retirarse, se calcula si ha habido beneficios o pérdidas, y se indica mediante una alerta:
// “Betting benefits: XXX €”, mostrando las pérdidas con un número negativo, y las ganacias con un número positivo. A continuación, otra alerta con el saldo total: “Total balance: YYY €”.

const a3e8 = () => {
  let suit = ["clubs", "hearts", "spades", "diamonds"];
  let cards = ["ACE", "KING", "QUEEN", "JACK", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

  let userCredit = 500;
  let betUser = "";

  do {
    let shouldContinue = true;

    //Card 1 - Computer
    let random = Math.floor(Math.random() * cards.length);
    let random2 = Math.floor(Math.random() * suit.length);

    //Card 2 - User
    let random3 = Math.floor(Math.random() * cards.length);
    let random4 = Math.floor(Math.random() * suit.length);

    betUser = parseInt(prompt("¿Cuánto quieres apostar?"));
    let betUserTest = /^[0-9]+$/;

    if (betUserTest.test(betUser) == true) {
      if (betUser > userCredit) {
        alert("Su apuesta es mayor que su saldo. Apueste de nuevo para seguir jugando.");
      } else {
        console.log(`La carta aleatoria del ordenador es: ${cards[random]} de ${suit[random2]}.`);
        console.log(`La carta aleatoria del usuario es: ${cards[random3]} de ${suit[random4]}.`);

        if (random3 < random) {
          alert("You win!");
          userCredit += betUser;
        } else if (random3 == random) {
          alert("Draw!");
        } else {
          alert("You lose!");
          userCredit -= betUser;
        }
        console.log(`Su saldo actual es de: ${userCredit}€.`);

        if (userCredit !== 0) {
          shouldContinue = prompt("¿Quieres seguir jugando? Introduzca 'y' para continuar o 'n' para salir.");
          if (shouldContinue === "y") {
              continue;
            } else if (shouldContinue === "n") {
    
              let benefits = userCredit - 500;
              if (benefits > 0) {
                alert(`Betting benefits: +${benefits}€.`);
              } else {
                alert(`Betting benefits: ${benefits}€.`);
              }
              alert(`Su saldo actual es de: ${userCredit}€.`);
              break;
    
            } else {
              alert("Por favor, introduzca un dato válido.");
              shouldContinue = prompt("¿Quieres seguir jugando? Introduzca 'y' para continuar o 'n' para salir.");
            }
          break;
        } else {
          console.log("Has perdido todo tu dinero.");
        };
      };
    } else {
      alert("Por favor, introduzca un número válido.");
    };
  } while (userCredit !== 0);
};

//a3e8();

//EJERCICIO 9
//El cifrado César es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.
// Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César, que lo usaba para comunicarse con sus generales.
// Escribe un programa con una función que recibe 2 parámetros, el primero para indicar si hay que cifrar o descifrar, y el segundo bien texto en claro, o bien el texto codificado mediante el cifrado Cesar. El programa mostrará por consola el string resultante, codificado o no, según corresponda.

const a3e9 = () => {

  const cesar = (coded, text) => {

    let userText = prompt("Introduce el texto:").split("");

    if (coded == true && text == true) {
      let decodedText = "";
      userText.forEach(element => {
        let ascii = element.charCodeAt() + 3;
        let decodedLetter = String.fromCharCode(ascii);

        if (decodedLetter == "#") {
          decodedLetter = " ";
        } else if (decodedLetter == "[") {
          decodedLetter = "A";
        } else if (decodedLetter == "\\") {
          decodedLetter = "B";
        } else if (decodedLetter == "]") {
          decodedLetter = "C";
        } else if (decodedLetter == "{") {
          decodedLetter = "a";
        } else if (decodedLetter == "|") {
          decodedLetter = "b";
        } else if (decodedLetter == "}") {
          decodedLetter = "c";
        } else {
          decodedLetter = String.fromCharCode(ascii);
        };
        decodedText += `${decodedLetter}`;
      });
      console.log(decodedText);

    } else if (coded == false && text == false) {
      let decodedText = "";
      userText.forEach(element => {
        let ascii = element.charCodeAt() - 3;
        let decodedLetter = String.fromCharCode(ascii);

        if (ascii == 29) {
          decodedLetter = " ";
        } else if (decodedLetter == ">") {
          decodedLetter = "X";
        } else if (decodedLetter == "?") {
          decodedLetter = "Y";
        } else if (decodedLetter == "@") {
          decodedLetter = "Z";
        } else if (decodedLetter == "^") {
          decodedLetter = "x";
        } else if (decodedLetter == "_") {
          decodedLetter = "y";
        } else if (decodedLetter == "`") {
          decodedLetter = "z";
        } else {
          decodedLetter = String.fromCharCode(ascii);
        };
        decodedText += `${decodedLetter}`;
      });
      console.log(decodedText);
      
    } else {
      alert("Revise los datos. El tipo de cifrado y el texto introducido no coinciden con las opciones de cifrado.")
    };
  };
  cesar(false, false);
};

//a3e9();
