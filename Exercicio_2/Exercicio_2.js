let readlineSync = require('readline-sync');

let continuar = true;

while (continuar) {
   
    let salario = Number(readlineSync.question("Digite o salario anual do funcionario (R$): "));
    let TempSer = Number(readlineSync.question("Digite o tempo de servico em anos: "));
    let desempenho = Number(readlineSync.question("Digite a pontuacao de desempenho (1 a 10): "));

    let bonusBase = 0
    let bonusFinal = 0

    if (TempSer <= 2) {
        bonusBase = salario * 0.05;
    } else if (TempSer <= 5) {
        bonusBase = salario * 0.10;
    } else {
        bonusBase = salario * 0.15;
    }

    if (desempenho >= 1 && desempenho <= 4) {
        bonusFinal = bonusBase;
    } else if (desempenho >= 5 && desempenho <= 7) {
        bonusFinal = bonusBase * 1.20;
    } else if (desempenho >= 8 && desempenho <= 10) {
        bonusFinal = bonusBase * 1.50;
    } else {
        console.log("Pontuacao invalida! Digite um valor de 1 a 10.");
        continue
    }

    console.log("\n=== Resultado ===");
    console.log(`Salario Anual: R$${salario.toFixed(2)}`);
    console.log(`Tempo de servico: ${TempSer} anos`);
    console.log(`Desempenho: ${desempenho}`);
    console.log(`Bonus Final: R$${bonusFinal.toFixed(2)}`);
    console.log("============================\n");

    let resposta = readlineSync.question("Deseja calcular outro funcionario? (Sim/Nao): ");
    if (resposta !== "Sim") {
        continuar = false;
        console.log("\nPrograma encerrado!");
    }
}