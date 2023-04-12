const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

// ---------------------------------------------------------

/*4. Ejercicio
Escribe un programa que simula un
 semáforo. El semáforo estará controlado por
una variable “centinela” llamada “isGreen”.
Si el semáforo está verde, mostrar por consola:
“Cross the road”, en caso contrario mostrar:
“Please wait”.*/

// start the arrow func.
const a1e4 = () => {
  // set the Array constant isGreen with colors values
  const isGreen = [
    { color: "yellow", time: 2 },
  { color: "red", time: 5 },
  { color: "green", time: 10 },
  ];
  function trafficLight(index) { 
      const color = isGreen[index].color; 
    switch (color) {
      case "green":
        console.log("Cross the road");
        break;
      case "red":
        console.log(`Please wait (${index + 1})`);
        break;
      default:
        console.log(`Be cautious (${index + 1})`);
    }
    // setTimeout is setting a time loop
    setTimeout(() => {
      index++;
      if (index >= isGreen.length) {
        index = 0;
      }
      trafficLight(index);
    }, isGreen[index].time * 1000);
  }
  
  trafficLight(0);
};
// call the arrow function a1e4()
// a1e4();

// ---------------------------------------------------------

/*10. Ejercicio
Investiga el objeto Math, y genera 2 números aleatorios, entre 1 y 6, 
para simular un juego de dados. Comprueba los resultados obtenidos y
 muestra por consola el ganador. Por ejemplo: 
“Player 1 wins!”, o “draw”, en caso de empate.*/

// start the arrow func.
const a1e10 = () => {
  //  Defining function which returns a random number between min and max
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const num1 = randomNumber(1, 6);
  const num2 = randomNumber(1, 6);
  console.log(num1);
  console.log(num2);
  // comparing the two numbers and displaying the winner or a draw
  function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return "Player 1 wins!";
  } else if (num1 < num2) {
    return "Player 2 wins!";
  } else {
    return "Draw";
  }
}
console.log(compareNumbers(num1, num2));
};
// call the arrow function a1e10
// a1e10();

// ---------------------------------------------------------
