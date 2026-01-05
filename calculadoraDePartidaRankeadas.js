//Calculadora de Partidas Rankeadas
//Segundo desafio prof Felipe Aguiar

function saldoRankeadas(vitorias, derrotas){
    
    return vitorias - derrotas
}

function definirNivel(classe){
    
    switch (true){

        case FERRO_MAX <= 10: 
            return "Ferro"
        
        case BRONZE_MAX <= 20: 
            return "Bronze"

        case PRATA_MAX <= 50: 
            return "Prata"

        case OURO_MAX <= 80: 
            return "Ouro"

        case DIAMANTE_MAX <= 90: 
            return "Diamante"

        case lENDARIO_MAX <= 100: 
            return "Lendário"

        case IMORTAL_MAX >= 101: 
            return "Lendário"
        }
}

//niveis de classe declarados em constantes pq se tratam de regra de negocio.
const FERRO_MAX = 10
const BRONZE_MAX = 20
const PRATA_MAX = 50
const OURO_MAX = 80
const DIAMANTE_MAX = 90
const lENDARIO_MAX = 100
const IMORTAL_MIN = 101
const IMORTAL_MAX = Infinity

let contadorVitorias = saldoRankeadas(460, 411)
let nivelAlcancado = definirNivel(contadorVitorias)

console.log(`O Herói tem saldo de ${contadorVitorias} está no nível de ${nivelAlcancado}`)