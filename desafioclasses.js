class classes {
    constructor(classe , idade , ataque , xp) {
        this.classe = classe;
        this.idade = idade;
        this.ataque = ataque;
        this.xp = xp;
    }
    atacar() {
        let descricaoAtaque = "";
        switch (this.classe) {
            case "Mago":
                descricaoAtaque = "Lança uma bola de fogo!";
                break;
            case "Guerreiro":
                descricaoAtaque = "Ataca com a espada!";
                break;
            case "Arqueiro":
                descricaoAtaque = "Dispara uma flecha!";
                break;
            case "Ladino":
                descricaoAtaque = "Ataca sorrateiramente com uma adaga!";
                break;
            case "Paladino":
                descricaoAtaque = "Ataca com o martelo!";
                break;
            case "Druida":
                descricaoAtaque = "Se transforma em um lobo para atacar!";
                break;
            case "Necromante":
                descricaoAtaque = "Controla os mortos-vivos para atacar!";
                break;
            case "Bárbaro":
                descricaoAtaque = "Ataca com seu martelo de 2 toneladas!";
                break;
            case "Feiticeiro":
                descricaoAtaque = "Lança uma magia com 3 tipos elementais!";
                break;
            case "Assassino":
                descricaoAtaque = "Ataca com uma adaga de veneno!";
                break;
            case "Ninja":
                descricaoAtaque = "Ataca com uma shuriken!";
                break;
            case "Samurai":
                descricaoAtaque = "Ataca com uma katana infernal!";
                break;  
            default: descricaoAtaque = "Usou um ataque básico!";   
        }
        let rank = calcularRank(this.xp);
        console.log("----------------------RANKS------------------");
        console.log(`O ${this.classe} tem o rank: ${calcularRank(this.xp)}`);
        console.log("\n");        
        console.log(`O ${this.classe} ${descricaoAtaque}`);
    }
}
    function calcularRank(xp) {
        let rank = "";
        if (xp >= 11000) {
            rank = "Adamantina";
        } else if (xp >= 10000) {
            rank = "Diamante";
        } else if (xp >= 9000) {
            rank = "Esmeralda";
        } else if (xp >= 8500) {
            rank = "Platina";
        } else if (xp >= 5000) {
            rank = "Safira";
        } else if (xp >= 3000) {
            rank = "Rubi";
        } else if (xp >= 2000) {
            rank = "Quartzo";
        } else if (xp >= 1500) {
            rank = "Gold"; 
        } else if (xp >= 1000) {
            rank = "Prata";
        } else if (xp >= 500) {
            rank = "Ferro";
        } else {
            rank = "Novato";
        }
        return rank;
    }   

    let classesDisponiveis = [
    new classes("Mago", 82, "Magia", 10000),
    new classes("Guerreiro", 35, "Espada", 5000),
    new classes("Arqueiro", 27, "Arco e flecha", 500),
    new classes("Ladino", 19, "Adaga", 2000),
    new classes("Paladino", 45, "Martelo", 12000),
    new classes("Druida", 60, "Transformação", 8500),
    new classes("Necromante", 70, "Controle de mortos-vivos", 1000),
    new classes("Bárbaro", 30, "Força bruta", 1500),
    new classes("Feiticeiro", 50, "Magia elemental", 9000),
    new classes("Assassino", 25, "Furtividade", 3000),
    new classes("Ninja", 28, "Agilidade", 3500),
    new classes("Samurai", 40, "Katana infernal", 11000),
    new classes("Humano", 18, "Soco", 000)
];

classesDisponiveis.forEach(h => h.atacar());

