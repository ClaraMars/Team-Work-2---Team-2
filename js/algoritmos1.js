const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

// 4. Ejercicio
// Escribe un programa que simula un
//  semáforo. El semáforo estará controlado por
// una variable “centinela” llamada “isGreen”.
// Si el semáforo está verde, mostrar por consola:
// “Cross the road”, en caso contrario mostrar:
// “Please wait”.

// start the arrow func.
const a1e4 = () => {
  // set the Array constant isGreen with colors values
  const isGreen = [
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "red",
    "red",
    "red",
    "red",
    "red",
    "green"
  ];
  // create a looping true to read the colors inside the array
  for (let i = 0; i < isGreen.length; i++) {
    // this constant color is to save the array values readed
    const color = isGreen[i];
    // if statement to check the traffic color and display a message
    if (isGreen[i] === "green") {
      console.log("Cross the road");
    } else if(isGreen[i] === "red") {
      console.log(`Please wait (${i})`);
    }else{
      console.log(`Be cautious (${i})`);
    }
  }
};
// call the arrow function
a1e4();
