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
  let dniLetter = (dni.slice(8)).toString();

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

    console.log(`El DNI aleatorio es: ${randomDniNumber}${officialLetter}.`)
}

//a3e4Bonus();