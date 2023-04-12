// --------------------------------------------------------

/*1. Ejercicio
Escribe un programa que pregunte al usuario los límites máximo y mínimo, 
y genere un array de 20 números aleatorios entre esos valores, 
ambos incluidos. Luego mostrará el valor más alto y el más bajo 
dentro del array, con el siguiente formato (por consola):
• min value: nnn
• max value: mmm */
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
  array[0] = min;
  array[19] = max;
  console.log(array);
  // add leading zeros to the number
  let resultMin = pad(min, 3);
  let resultMax = pad(max, 3);

  // Logged the result
  console.log(`min value: ${resultMin}`);
  console.log(`max value: ${resultMax}`);
};
// call the arrow function a3e1
// a3e1();

// --------------------------------------------------------

/* 7. Ejercicio
Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array. 
A continuación filtra todos los números impares, ordenando los pares de mayor a menor.
*/
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
// call the arrow function a3e7
// a3e7();
