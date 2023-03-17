const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};   

//Ejercicio 5
// Teniendo en cuenta las siguientes temperaturas:
// • Absolute Zero → -273.15°C
// • Freezing point → 0°C
// • Body Temperature → 37°C
// • Boiling point → 100°C
// Escribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura
// switch). ** Buscar la fórmula en Google**


//Versión 1.0
// const a1e5 = () => {

//     let celsius = parseInt(prompt("¿Cuál de las siguientes temperaturas quieres convertir a Farenheit?: Absolute Zero (-273.15°C), Freezing Point (0°C), Body Temperature (37°C) o Boiling Point (100°C)"));


//     let farenheit;

//     switch (celsius) {
//         case -273.5:
//             farenheit = celsius * (9/5) + 32;
//             break;
//         case 0:
//             farenheit = celsius * (9/5) + 32;
//             break;
//         case 37:
//             farenheit = celsius * (9/5) + 32;
//             break;
//         case 100:
//             farenheit = celsius * (9/5) + 32;
//             break;
//         default:
//             console.log("Por favor, introduce una temperatura correcta.")
//             break;
//     }
//     return farenheit;
// }

// console.log(`La temperatura es de ${a1e5()}°F.`);

const a1e5 = () => {

    let celsius = parseInt(prompt("¿Cuál de las siguientes temperaturas quieres convertir a Farenheit?: \n Absolute Zero (-273.15°C)\n Freezing Point (0°C)\n Body Temperature (37°C)\n Boiling Point (100°C)"));


    let farenheit;

    switch (celsius) {
        case -273.5:
            farenheit = celsius * (9/5) + 32;
            break;
        case 0:
            farenheit = celsius * (9/5) + 32;
            break;
        case 37:
            farenheit = celsius * (9/5) + 32;
            break;
        case 100:
            farenheit = celsius * (9/5) + 32;
            break;
        default:
            console.log("Por favor, introduce una temperatura correcta.")
            break;
    }
    return Math.floor(farenheit);
}

//console.log(`La temperatura es de ${a1e5()}°F.`);

//Ejercicio 9

// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para strings, si los datos
// introducidos son válidos, teniendo en cuenta lo siguiente.
// • El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni
// guiones. Ejemplo: X0523821F.
// • El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
// ** Consultar la tabla ASCII para poder resolver el ejercicio. **

// const a1e9 = () => {

//     let document = prompt("Por favor, introduce tu DNI o NIE:");
//     let docLenght = document.lenght;

//     if (docLenght == 9) {
//         if (document ) {
            
//         } else {
            
//         }
//     } else {
//         console.log("Los datos introducidos no son correctos. Por favor, revisa los datos.")
//     }

    
// }

const a1e9 = () => {

    let dni = prompt("Por favor, introduce tu DNI:");
    let nie = prompt("Por favor, introduce tu NIE:");


    if (dni.startsWith(!X) || dni.startsWith(!T) == 9) {
        if (document ) {
            
        } else {
            
        }
    } else {
        console.log("Los datos introducidos no son correctos. Por favor, revisa los datos.")
    }

    
}