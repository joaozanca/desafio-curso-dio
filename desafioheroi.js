const heroi = "O Herói "
const nivel = " está no nível de "
//lista dos Herois
let herois = ["batman", "superman", "ironman", "flash", "lanterna verde", "aquaman", "spiderman", "capitão américa"];
let xpStatus = [0, 0, 0, 0, 0, 0, 0, 0];
let xpPorDia = [200, 1500, 450, 1100, 50, 850, 950, 700];

//10 Dias upando na dungeon
for (let dia = 1; dia <= 10; dia++) {
    for (let i = 0; i < herois.length; i++) {
        xpStatus[i] += xpPorDia[i];
    }
}
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i];
    let xpFinal = xpStatus[i];
    let rank = "";

    // xpFinal
   if (xpFinal < 1000) {
        rank = "Ferro";
    } else if (xpFinal <= 2000) {
        rank = "Bronze";
    } else if (xpFinal <= 5000) {
        rank = "Prata";
    } else if (xpFinal <= 7000) {
        rank = "Ouro";
    } else if (xpFinal <= 8000) {
        rank = "Platina";
    } else if (xpFinal <= 9000) {
        rank = "Ascendente";
    } else if (xpFinal <= 10000) {
        rank = "Imortal";
    } else {
        rank = "Radiante";
    }
    console.log( heroi + nome + nivel + rank);
}