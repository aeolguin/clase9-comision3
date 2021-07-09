//libreria propia

//Declaramos nuestra clase

class Libreria {
    constructor (data) {
        this.data = data
    }

    imprimeAlgo (algo) {
        console.log(algo)
    }

    recooreArray (h) {
        h.forEach(elemento => {
            this.imprimeAlgo(elemento)
        });
    }

    imprimeIntegranteAlAsar () {
        let numeroAsar = Math.round(Math.random() * (8 - 1));
        return this.data[numeroAsar]
    }
}

module.exports = {Libreria}