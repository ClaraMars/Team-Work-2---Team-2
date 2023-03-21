const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

/*5. Ejercicio
Escribe una función con el nombre “stringManager”, que recibirá 2 parámetros: 
un string, introducido por el usuario a través del prompt(), 
y un segundo parámetro, que será un objeto con las funciones a realizar. 
===========================================================
Genera un Lorem50 desde VS Code para probar el ejercicio.
El ejercicio comenzará pidiendo un string al usuario, 
a través de la función prompt(). A continuación, mediante un menú de consola, 
preguntará al usuario las siguientes opciones:
• Replace chars by signs?
• Capitalize?
• Replace spaces with commas?
La primera opción reemplazará de la siguiente forma:
• a→@
• e→3
• i→1
• o→0 
• s→$
La segunda opción pondrá la primera letra de cada palabra en mayúscula, 
y la tercera cambiará los espacios por comas. No puede haber 2 comas seguidas.
El menú aceptará únicamente y para sí o n para no. 
Almacenará las respuestas en un objeto con las propiedades: 
replaceChars, capitalize y replaceSpaces, cuyos valores asociados serán
 booleanos.
La salida del programa deberá mostrar el string original, 
y a continuación el string con cada una de las modificaciones requeridas.
 Un ejemplo con todas las opciones marcadas como true:
• Lorem ipsum dolor sit amet
• L0r3m 1p$um d0l0r $1t @m3t
• Lorem Ipsum Dolor Sit Amet
• Lorem,ipsum,dolor,sit,amet
** El programa deberá registrar el tiempo de realización, es decir, 
desde que comienza el proceso de transformación del string hasta que termina. 
Después de los string requeridos, el programa mostrará las siguientes líneas: **
• 5 words, 25 chars
• work done in 750 miliseconds */

// start the arrow func.
const a1e10 = () => {
  function stringManager(str, operations) {

  }
  const strOps = {
    replaceChars: function (str, operations) {
      operations = str;
      let result = operations
        .replace(/a/g, "@")
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/o/g, "0")
        .replace(/s/g, "$");
      return (str = result);
    },

    capitalize: function (str, operations) {
      operations = str;
      /*The charAt() function returns the character at a given position in a string.
      The toUpperCase() function converts all the characters of an input string to uppercase.
      This function slices a given string from a specified “start” position until the specified “end” position.
      const arrStr split the above operations into an array of strings between a blankspace*/
      const arrStr = operations.split(" ");
      //    let result = operations.charAt(0).toUpperCase() + operations.slice(1);
      for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
      }
      // let result = arrStr.join(" ") join all the elements back into a string
      let result = arrStr.join(" ");
      return (str = result);
    },
    replaceSpaces: function (str, operations) {
      operations = str;
      let result = operations.replaceAll(" ", ",");
      return (str = result);
    },
    // declaración de variables que se utilizarán en el programa
  exit: false, // flag que determina si se cierra el programa
  op: -1, // la operación matemática que elige el usuario
  // agrupamos las posibles operaciones a realizar
    // the replacement text options
    options: [
      "Replace chars by signs?",
      "Capitalize?",
      "Replace spaces with commas?",
    ],

    // variables
    str: undefined,
    operations: undefined,
  };

  // take input
  str = prompt("Write the text here: ");
// ------------------------------------------------


  
};
a1e10();
