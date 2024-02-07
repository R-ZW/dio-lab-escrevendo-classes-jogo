class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque;
    }
    
    definirAtaque(){
        switch(this.tipo){
            case "Guerreiro":
            this.ataque = "espada";
            break;

            case "Mago":
            this.ataque = "magia";
            break;

            case "Monge":
            this.ataque = "artes marciais";
            break;

            case "Ninja": 
            this.ataque = "shuriken";
            break;

            default:
            this.ataque = "ataque padrão";
        }
    }

    atacar(){
        this.definirAtaque();
        console.log(`O ${this.tipo} atacou usando ${this.ataque}!`);
    }
}

guerreiro1 = new Heroi("Conan", 35, "Guerreiro");
mago1 = new Heroi("Gandalf", 100, "Mago");
monge1 = new Heroi("Bruce Lee", 32, "Monge");
ninja1 = new Heroi("Ryu", 25, "Ninja");
joao = new Heroi("João", 25, "Herói");

guerreiro1.atacar();
mago1.atacar();
monge1.atacar();
ninja1.atacar();
joao.atacar();