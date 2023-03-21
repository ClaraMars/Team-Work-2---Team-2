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

    /*This if statement to check if a negative number is provided to the function. If it is, it removes the minus sign from the number, then uses the padStart method to add leading zeros to the positive absolute value, and re-adds the minus sign. If the number is positive, it simply uses the padStart method to add leading zeros to the number. */
    if (num < 0) {// check if the number is negative
      const withoutMinus = String(num).slice(1);// remove the minus sign from the number
      return '-' + withoutMinus.padStart(size, '0');// add leading zeros to the positive absolute value and re-add the minus sign
    }
    return String(num).padStart(size, '0');// add leading zeros to the number
  }
//   console.log(pad(3, 3));
//   console.log(pad(-3, 3));
  

  // User input maximum and minimum value
  let min = parseInt(prompt("Enter the  minimum value:"));
  let max = parseInt(prompt("Enter the maximum value:"));

  // Generate tweenty integer random numbers
  const array = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );

  // Include the given minimum and maximum values in the array
  array[0] = min;
  array[19] = max;
  console.log(array);

  // Read the highest number and the smaller number inside the array using (...) => spread operator.
//   const minValue = Math.min(...array);
//   const maxValue = Math.max(...array);

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
Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array. A continuación filtra todos los números impares, ordenando los pares de mayor a menor.
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
let pair = array.filter(n => n%2 === 0)
let pairSorted = pair.sort((a, b) => b - a);
console.log(pairSorted);
};
// call the arrow function a3e7
a3e7();