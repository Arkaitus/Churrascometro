
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qTotalDcarne = carnePorpessoa(duracao) * adultos + (carnePorpessoa(duracao) / 2 * criancas);
    let qTotalDcerveja = cervejaPorpessoa(duracao) * adultos;
    let qTotalDbebidas = bebidasPorpessoa(duracao) * adultos + (bebidasPorpessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qTotalDcarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qTotalDcerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qTotalDbebidas/2000)} Pet's de 2l de Bebidas</p>`

}

function carnePorpessoa(duracao){
    if (duracao >= 6){
        return 650;
    } else{
        return 400;
    }

}

function cervejaPorpessoa(duracao){
    if (duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }

}

function bebidasPorpessoa(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }

}
