const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_TITULAR = document.getElementById('card_titular');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');
const INPUT_CVV = document.getElementById('card_cvv');

let hoje = new Date();
let anofim = hoje.getFullYear() + 10;

for (let i = hoje.getFullYear(); i <= 2035; i++){
    SELECT_ANO.innerHTML += `<option>${i}</option>`;
}

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]

for (let i = 0; i <= 11; i ++){
    SELECT_MES.innerHTML += `<option>${MESES[i]}</option>`;
}

const SPAN_NUMERO = document.getElementById('resultado_numero');
const SPAN_TITULAR = document.getElementById('resultado_titular');
const SPAN_MES = document.getElementById('resultado_mes');
const SPAN_ANO = document.getElementById('resultado_ano');


function preencherNumero() {
    SPAN_NUMERO.innerHTML = INPUT_NUMERO.value; 
}

function preencherTitular() {
    SPAN_TITULAR.innerHTML = INPUT_TITULAR.value; 
}

function preencherMes() {
    let m = SELECT_MES.selectedIndex;

    if (m < 10){
        SPAN_MES.innerHTML = "0" +m;
    } else {
        SPAN_MES.innerHTML = m;
    }
}

function preencherAno() {
    SPAN_ANO.innerHTML = SELECT_ANO.value; 
}