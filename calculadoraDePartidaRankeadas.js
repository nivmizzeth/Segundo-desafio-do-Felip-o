//Calculadora de Partidas Rankeadas
//Segundo desafio prof Felipe Aguiar

saldoRankeadas(14, 10)

function saldoRankeadas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

nivel(saldoVitorias)

function nivel(classe){
    let userClasse = ""
    
    if (classe <= 10 ){
        userClasse = "Ferro"
    } else if (classe <= 20){
        userClasse = "Bronze"
    } else if (classe <= 50){
        userClasse = "Prata"
    } else if (classe <= 80){
        userClasse = "Ouro"
    } else if (classe <= 90){
        userClasse = "Diamante"
    } else if (classe <= 100){
        userClasse = "Lendário"
    } else {
        userClasse = "Imortal"
    }

    return userClasse

}



console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`)