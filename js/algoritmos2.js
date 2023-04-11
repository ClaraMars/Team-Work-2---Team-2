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
const a2e5 = () => {
  /* let stringTest =
     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non iusto cumque eveniet odit molestiae beatae eius. 
  Sit hic unde at recusandae natus eligendi, dolorum quasi! Ipsam, tempore perspiciatis obcaecati magni, reprehenderit 
  corporis quaerat at doloremque, ipsa suscipit libero aliquid. Magni,
  sunt! Soluta quibusdam praesentium repudiandae totam laudantium ullam eum est?";*/
  function stringManager(text, option) {
    // take the text input
    text = prompt("Write here your text!");

    const transformOps = {
      replaceChars: false,
      capitalize: false,
      replaceSpaces: false,
    };

    while (true) {
      option = prompt(
        `Choose an option:
      1. Replace chars by signs?
      2. Capitalize?
      3. Replace spaces with commas?
      Enter '0' to finish.`
      );
      if (option === null) {
        // User clicked "cancel"
        alert("Operation canceled.");
        break;
      }
      switch (option.toLowerCase()) {
        case "1":
          transformOps.replaceChars = true;
          break;
        case "2":
          transformOps.capitalize = true;
          break;
        case "3":
          transformOps.replaceSpaces = true;
          break;
        case "0":
          break;
        default:
          alert("Invalid option.");
          continue;
      }
      const changes = `Options chose:
    Replace chars by signs? ${transformOps.replaceChars}
    Capitalize? ${transformOps.capitalize}
    Replace spaces with commas? ${transformOps.replaceSpaces}
    Is it ok?`;

      const confirmed = confirm(changes);
      if (!confirmed) {
        break;
      }
    }

    // Define operations object
    const strOps = {
      replaceChars: function (text) {
        // Replace characters
        let result = text
          .replace(/a/g, "@")
          .replace(/e/g, "3")
          .replace(/i/g, "1")
          .replace(/o/g, "0")
          .replace(/s/g, "$");

        return result;
      },

      capitalize: function (text) {
        // Capitalize words
        /*The charAt() function returns the character at a given position in a string.
      The toUpperCase() function converts all the characters of an input string to uppercase.
      This function slices a given string from a specified “start” position until the specified “end” position.
      const arrStr split the above operations into an array of strings between a blankspace*/
        const arrStr = text.split(" ");
        //    let result = operations.charAt(0).toUpperCase() + operations.slice(1);
        for (let i = 0; i < arrStr.length; i++) {
          arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
        }
        // let result = arrStr.join(" ") join all the elements back into a string
        let result = arrStr.join(" ");
        return result;
      },
      replaceSpaces: function (text) {
        // Replace spaces with commas
        let result = text.replaceAll(" ", ",");
        return result;
      },
    };
  }
  stringManager();
};
a2e5();
