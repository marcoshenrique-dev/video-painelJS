
var saldo = localStorage.getItem("saldo");
localStorage.setItem("saldo" , 2);

var valorSaldo = 0;

function getSaldo () {

    var texto = document.querySelector("h3");
    texto.innerHTML = `R$${valorSaldo}`;

    validaCor(texto);

}

function validaCor(texto) {

  if(String(valorSaldo).indexOf("-") !== -1){

    texto.style.color = "red";

}else {

  texto.style.color = "green";
}
}

getSaldo();

function UpdateSaldo(type){

  if(type === 'diminuir'){

    var valor = document.querySelector('#despesa').value;

    valor === "" || valor === null ? valor = 0 : true

    valorSaldo = parseInt(valorSaldo) - parseInt(valor);

    getSaldo();

    document.querySelector("#despesa").value = "";

  }else if (type === 'adicionar'){

    var valor = document.querySelector('#ganho').value;

    valor === "" || valor === null ? valor = 0 : true

    valorSaldo = parseInt(valorSaldo) + parseInt(valor);

    getSaldo();

    document.querySelector("#ganho").value = "";
  }

}

