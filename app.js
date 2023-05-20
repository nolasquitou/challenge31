class Peliculas {
    constructor(titulo, genero, año, sinopsis) {
        this.titulo = titulo;
        this.genero = genero;
        this.año = año;
        this.sinopsis = sinopsis;
    }
    listar(){
        for(const key in this){
            alert(`${key} : ${this[key]}`);
        }
    }
}

const anabel = new Peliculas("anabel", "Terror", 1990, "Muñeca diabolica");
const chuky = new Peliculas("Chuky", ["Terror", "Suspenso"], 1990, "Muñeco diabolica");
const spiderman = new Peliculas("Spider-Man", "Accion", 1997, "El asombroso hombre araña");

