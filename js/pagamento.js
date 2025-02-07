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
const IMG_VISA = document.getElementById('bandeira_visa');
const IMG_MASTER = document.getElementById('bandeira_mastercard');
const SPAN_CVV = document.getElementById('resultado_cvv');


function removerUltimoDigito(numero){
    return numero.substr(0, numero.length - 1);
}

function preencherNumero() {
    let digitos = INPUT_NUMERO.value;
    let ultimoDigito = digitos.substr(-1);

    if (isNaN(ultimoDigito)){
       digitos = removerUltimoDigito(digitos);
    }

    INPUT_NUMERO.value = digitos;
    SPAN_NUMERO.innerHTML = digitos;

    alterarBandeira();

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

function alterarBandeira(){
    if (INPUT_NUMERO.value.length > 1){
        return;
    }

    IMG_VISA.style.display = 'none';
    IMG_MASTER.style.display = 'none';

    if (INPUT_NUMERO.value === '4') {
        IMG_VISA.style.display = 'block';
    }

    if (INPUT_NUMERO.value === '5') {
        IMG_MASTER.style.display = 'block';
    }
}

function preencherCVV() {
    let digitos = INPUT_CVV.value;
    let ultimoDigito = digitos.substr(-1);

    if (isNaN(ultimoDigito)){
       digitos = removerUltimoDigito(digitos);
    }

    INPUT_CVV.value = digitos;
    SPAN_CVV.innerHTML = digitos; 
}

function mostrarFrente(){
    document.getElementById('cartao_frente').classList.add('animate_slideInRight')

    document.getElementById('cartao_frente').style.display = 'block';
    document.getElementById('cartao_verso').style.display = 'none';
}

function mostrarVerso(){
    document.getElementById('cartao_verso').classList.add('animate__slideInRight')

    document.getElementById('cartao_verso').style.display = 'block';
    document.getElementById('cartao_frente').style.display = 'none';
}
