const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};   

// Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A continuación, muestra cuál ha sido la temperatura media.

const a2e4 = () => {
    let temp1 = parseInt("25");
    let temp2 = parseInt("27");
    let temp3 = parseInt("24");
    let temp4 = parseInt("26");
    let temp5 = parseInt("28");
    let temp6 = parseInt("25");
    let temp7 = parseInt("24");

    let tempMedia = ((temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7)/7).toFixed(2);

    console.log(`La temperatura media de los últimos 7 días es: ${tempMedia}°C.`);
}

a2e4();