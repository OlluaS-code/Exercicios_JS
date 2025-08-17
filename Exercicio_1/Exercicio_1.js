let readlineSync = require('readline-sync')

let valorReais = Number(readlineSync.question('Qual o valor que deseja converter?'));

moedaDestino = ['USD', 'EUR', 'CAD', 'GBP']
index = readlineSync.keyInSelect(moedaDestino, 'Para qual moeda quer fazer a conversao?')

let convertido = 0;

switch (index) {
    case 0:
        convertido = valorReais * 0.19;
        console.log(`R$${valorReais.toFixed(2)}, convertido para USD fica $${convertido.toFixed(2)} USD`);
        break;

    case 1:
        convertido = valorReais * 0.18;
        console.log(`R$${valorReais.toFixed(2)}, convertido para EUR fica €${convertido.toFixed(2)} EUR`);
        break;

    case 2:
        convertido = valorReais * 0.25;
        console.log(`R$${valorReais.toFixed(2)}, convertido para CAD fica C$${convertido.toFixed(2)} CAD`);
        break;

    case 3:
        convertido = valorReais * 0.15;
        console.log(`R$${valorReais.toFixed(2)}, convertido para GBP fica £${convertido.toFixed(2)} GBP`);
        break;

    default:
        console.log("Moeda inválida! Escolha entre: USD, EUR, CAD ou GBP.");
}