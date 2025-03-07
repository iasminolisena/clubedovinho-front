const INPUT_CATEGORIAS = document.getElementById('categorias');
const INPUT_CLIENTES = document.getElementById('clientes');
const INPUT_PAISES = document.getElementById('paises');
const INPUT_PRODUTOS = document.getElementById('produtos');
const INPUT_PEDIDOS = document.getElementById('pedidos');
const QUANT_MODULO = document.getElementById('modulo');

let contador = 0;

function AdicionarModulo(evento) {
    
    if(evento.checked === true){
        contador += 1;
        QUANT_MODULO.innerHTML = contador;

    }else if (evento.checked === false){
        contador -= 1;
        QUANT_MODULO.innerHTML  = contador;
    }
}

function habilitarDarkmode(evento){

    if(evento.checked === false){
        localStorage.setItem('darkmode','não');
        location.href="";

        return;
    }
    
    localStorage.setItem('darkmode','sim');
    document.getElementsByTagName("head")[0].innerHTML += `
        <link rel="stylesheet" href="../css/darkmode.css">`;
    
}

if(localStorage.getItem('darkmode') === 'sim') {
    document.getElementById('darkmode').checked = true;
}

