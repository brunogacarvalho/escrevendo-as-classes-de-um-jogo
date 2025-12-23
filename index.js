class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        if (this.tipo ==="mago") {
            ataque = "magia";
        }

        else if (this.tipo === "guerreiro") {
            ataque = "espada";
        }

        else if (this.tipo === "monge") {
            ataque = "artes marciais";
        }

        else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log("o " + this.tipo + " atacou usando " + ataque);
    }
}

const heroi1 = new Heroi("Arthur", 30, "guerreiro");
    
console.log("Herói criado!");
console.log("Nome:", heroi1.nome);

heroi1.atacar();