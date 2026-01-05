//Calculadora de Partidas Rankeadas
//Segundo desafio prof Felipe Aguiar

//niveis de classe declarados em constantes pq se tratam de regras importantes do negocio.
const FERRO_MAX = 10
const BRONZE_MAX = 20
const PRATA_MAX = 50
const OURO_MAX = 80
const DIAMANTE_MAX = 90
const LENDARIO_MAX = 100
const IMORTAL_MIN = 101

//função de comparaçao de vitorias e derrotas
function calcularVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

//funçao que defini a classe do heroi de acordo com o seu nivel
function definirNivel(classe){
    
    switch (true) {
        case classe <= FERRO_MAX:
            return "Ferro"

        case classe <= BRONZE_MAX:
            return "Bronze"

        case classe <= PRATA_MAX:
            return "Prata"

        case classe <= OURO_MAX:
            return "Ouro"

        case classe <= DIAMANTE_MAX:
            return "Diamante"

        case classe <= LENDARIO_MAX:
            return "Lendário"

        case classe >= IMORTAL_MIN:
            return "Imortal"

        default:
            return "Nível inválido"
    }
}


let contadorVitorias = calcularVitorias(493, 400)
let nivelAlcancado = definirNivel(contadorVitorias)

//Saida final na tela para o usuario po interpolação
console.log(`O Herói tem saldo de ${contadorVitorias} vitorias e está no nível de ${nivelAlcancado}.`)