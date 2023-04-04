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

//SOLUCIÓN SIN BUCLE
// const a1e9 = () => {

//     let document = prompt("Por favor, introduce tu DNI o NIE");
//     console.log(document);

//     if (document.length == 9) {

//         let initial = document.slice(0, 1);
//         let medium = document.slice(1, 8);
//         let final = document.slice(8);
        
//         let nieInitial = /(X|T){1}/;
//         let dniInitial = /[0-9]{1}/;

//         let docMedium = /[0-9]{7}/g;

//         let nieFinal = /[A-Z]{1}/;
//         let dniFinal = final.charCodeAt(0);

//         if (nieInitial.test(initial) == true && docMedium.test(medium) == true && nieFinal.test(final) == true) {
//            console.log('El NIE introducido es correcto!');      
//         } else if (dniInitial.test(initial) == true && docMedium.test(medium) == true && (dniFinal >= 32 && dniFinal <= 167)) {
//            console.log('El DNI introducido es correcto!');
//         } else {
//             console.log("Por favor, revise los datos. El dato introducido no se corresponde con un DNI o NIE válido.");
//         }
//     } else {
//         alert("Por favor, revise los datos. El dato introducido no es correcto.");
//     }
// }

// a1e9();


//SOLUCIÓN CON BUCLE
const a1e9 = () => {

    let document = "";
    let finalDoc = false;

    do {
        document = prompt("Introduce tu DNI o NIE:");

        let initial = document.slice (0, 1);
        let medium = document.slice(1, 8);
        let final = document.slice(8);
        
        
        if (document.length !== 9) {
            console.log("Por favor, revise los datos. El dato introducido no es correcto.");
        } else {

            let numbers = /[0-9]{7}/;

            let nieFinal = /[A-Z]{1}/;
            
            let dniInitial = /[0-9]{1}/;
            let dniFinal = final.charCodeAt(0);
            
            if ((document.startsWith("X", 0) || document.startsWith("T", 0)) && numbers.test(medium) == true && nieFinal.test(final) == true) {
                console.log("El NIE introducido es correcto!");
                finalDoc = true;
            } else if (dniInitial.test(initial) == true && numbers.test(medium) == true && (dniFinal >= 65 && dniFinal <= 90)) {
                console.log("El DNI introducido es correcto!");
                finalDoc = true;
            } else {
                console.log("Los datos introducidos no se corresponden con un DNI o NIE válido.")
            }
        }
    } while (finalDoc !== true);
}

// a1e9();