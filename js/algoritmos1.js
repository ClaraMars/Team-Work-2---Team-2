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

const a1e4 = () => {
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
  for (let i = 0; i < isGreen.length; i++) {
    if (isGreen[i] === "green") {
      console.log("Cross the road");
    } else if(isGreen[i] === "red") {
      console.log(i, "Please wait");
    }else{
      console.log(i, "Be careful");
    }
  }
};
a1e4();
