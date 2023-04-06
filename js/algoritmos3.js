const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

// Ejercicio 4
// Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se determina por la siguiente tabla.
// Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido, lanzando una alerta “Valid DNI” o “The data entered is wrong”.

const a3e4 = () => {
  let dni = prompt("Introduce tu DNI");

  let dniNumberRest = parseInt(dni.slice(0, 8)) % 23;
  let dniLetter = dni.slice(8).toString();

  let validDni = /^[0-9]{8}[A-Z]$/;
  if (validDni.test(dni) == true) {
    let officialLetter = "";
    switch (dniNumberRest) {
      case 0:
        officialLetter = "T";
        break;
      case 1:
        officialLetter = "R";
        break;
      case 2:
        officialLetter = "W";
        break;
      case 3:
        officialLetter = "A";
        break;
      case 4:
        officialLetter = "G";
        break;
      case 5:
        officialLetter = "M";
        break;
      case 6:
        officialLetter = "Y";
        break;
      case 7:
        officialLetter = "F";
        break;
      case 8:
        officialLetter = "P";
        break;
      case 9:
        officialLetter = "D";
        break;
      case 10:
        officialLetter = "X";
        break;
      case 11:
        officialLetter = "B";
        break;
      case 12:
        officialLetter = "N";
        break;
      case 13:
        officialLetter = "J";
        break;
      case 14:
        officialLetter = "Z";
        break;
      case 15:
        officialLetter = "S";
        break;
      case 16:
        officialLetter = "Q";
        break;
      case 17:
        officialLetter = "V";
        break;
      case 18:
        officialLetter = "H";
        break;
      case 19:
        officialLetter = "L";
        break;
      case 20:
        officialLetter = "C";
        break;
      case 21:
        officialLetter = "K";
        break;
      case 22:
        officialLetter = "E";
        break;
      default:
        break;
    }

    if (officialLetter === dniLetter) {
      alert("Valid DNI.");
    } else {
      alert("The data entered is wrong.");
    }
  } else {
    alert("Please, check your data. DNI was not valid.");
  }
};

//a3e4();

//Ejercicio 4 Bonus
const a3e4Bonus = () => {
  let max = 99999999;
  let min = 00000001;
  let randomDniNumber = Math.floor(Math.random() * (max - min + 1) + min);

  switch (randomDniNumber % 23) {
    case 0:
      officialLetter = "T";
      break;
    case 1:
      officialLetter = "R";
      break;
    case 2:
      officialLetter = "W";
      break;
    case 3:
      officialLetter = "A";
      break;
    case 4:
      officialLetter = "G";
      break;
    case 5:
      officialLetter = "M";
      break;
    case 6:
      officialLetter = "Y";
      break;
    case 7:
      officialLetter = "F";
      break;
    case 8:
      officialLetter = "P";
      break;
    case 9:
      officialLetter = "D";
      break;
    case 10:
      officialLetter = "X";
      break;
    case 11:
      officialLetter = "B";
      break;
    case 12:
      officialLetter = "N";
      break;
    case 13:
      officialLetter = "J";
      break;
    case 14:
      officialLetter = "Z";
      break;
    case 15:
      officialLetter = "S";
      break;
    case 16:
      officialLetter = "Q";
      break;
    case 17:
      officialLetter = "V";
      break;
    case 18:
      officialLetter = "H";
      break;
    case 19:
      officialLetter = "L";
      break;
    case 20:
      officialLetter = "C";
      break;
    case 21:
      officialLetter = "K";
      break;
    case 22:
      officialLetter = "E";
      break;
    default:
      break;
  }

  console.log(`El DNI aleatorio es: ${randomDniNumber}${officialLetter}.`);
};

//a3e4Bonus();

//Ejercicio 8
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

  let userCredit = 10;
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
        console.log(`La carta aleatoria del ordenador es: ${cards[random]} de ${suit[random2]}`);
        console.log(`La carta aleatoria del usuario es: ${cards[random3]} de ${suit[random4]}`);

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

        shouldContinue = prompt("¿Quieres seguir jugando? Introduzca 'y' para continuar o 'n' para salir.");

        if (shouldContinue === "y") {
          shouldContinue = true;
        } else if (shouldContinue === "n") {
          shouldContinue = false;

          let benefits = userCredit - 10;
          if (benefits > 0) {
            alert(`Betting benefits: +${benefits}`);
          } else {
            alert(`Betting benefits: ${benefits}`);
          }
          alert(`Su saldo actual es de: ${userCredit}€.`);
          break;

        } else {
          alert("Por favor, introduzca un dato válido.");
          shouldContinue = prompt("¿Quieres seguir jugando? Introduzca 'y' para continuar o 'n' para salir.");
        }
      }
    } else {
      alert("Por favor, introduzca un número válido.");
    }
  } while (betUser !== 0);
};

//a3e8();