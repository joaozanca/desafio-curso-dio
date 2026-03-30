function calcularSaldo(vitorias, derrotas) {    
    return vitorias - derrotas;
}
let herois = ["Lanterna Verde", "Capitão América", "Aquaman", "Spiderman", "Batman", "Flash", "Superman", "Ironman"];
let vitorias = [5, 20, 45, 75, 88, 98, 110, 150]; 
let derrotas = [0, 5, 10, 10, 5, 2, 5, 10];

for (let i = 0; i < herois.length; i++) {
    let saldoVitorias = calcularSaldo(vitorias[i], derrotas[i]);
    let nivel = "";
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    console.log("O herói " + herois[i] + " tem saldo de vitorias: " + saldoVitorias + " e seu nível é: " + nivel);
}