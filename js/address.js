const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');


INPUT_CEP.addEventListener('blur', () => {
    if (INPUT_CEP.value.length != 8){
        return;
    }
    let url = `https://viacep.com.br/ws/${INPUT_CEP.value}/json/`;

//`XMLHttpRequest`
    fetch(url)
        .then(res => res.json())
        .then(endereco => {
            INPUT_LOGRADOURO.value = endereco.logradouro;
            INPUT_BAIRRO.value = endereco.bairro;
            INPUT_CIDADE.value = endereco.localidade;
            INPUT_UF.value = endereco.uf;

            INPUT_NUMERO.focus();
        });

});

function checkInputs(inputs) {
    var preenchida = true;
    
    inputs.forEach((input) => {
        
      if(input.value === "") {
          preenchida = false;
      }
    
    });
    
    return preenchida;
    
  }
  var inputs = document.querySelectorAll("input");
  var button = document.querySelector("button");
  inputs.forEach((input) => {
      
    input.addEventListener("keyup", () => {
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });