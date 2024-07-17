
let apariciones = [];

for (let i = 0; i < 11; i++) {
    apariciones[i] = 0;
}


for (let i = 0; i < 50; i++) {

    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;

    apariciones[suma - 2]++;
}

for (let i = 0; i < apariciones.length; i++) {
    console.log(`Suma ${i + 2}: ${apariciones[i]} apariciones`);
}
