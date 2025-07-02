function jogoUm() {
  let h1 = document.querySelector("h1");
  h1.textContent = "Você escolheu Manipular Frutas!";

  let divGif = document.querySelector(".gif");
  divGif.innerHTML = "<p>Exemplo de frutas:</p><ul><li>Maçã</li><li>Banana</li><li>Uva</li></ul>";
}

function jogoDois() {
  let h1 = document.querySelector("h1");
  h1.textContent = "Você escolheu Formulário de Valores!";

  let divGif = document.querySelector(".gif");
  divGif.innerHTML = `
    <form>
      <label>Digite um valor:</label>
      <input type="text" id="valor" />
      <button type="button" onclick="mostrarValor()">Enviar</button>
    </form>
  `;
}

function jogoTres() {
  let h1 = document.querySelector("h1");
  h1.textContent = "Você escolheu Número Secreto!";

  let divGif = document.querySelector(".gif");
  divGif.innerHTML = `
    <p>Tente adivinhar o número secreto (1 a 10):</p>
    <input type="number" id="chute" />
    <button type="button" onclick="verificarNumero()">Chutar</button>
    <p id="mensagem"></p>
  `;
}

function mostrarValor() {
  let valor = document.querySelector("#valor").value;
  alert("Você digitou: " + valor);
}

function verificarNumero() {
  let chute = parseInt(document.querySelector("#chute").value);
  let numeroSecreto = 7;

  let mensagem = document.querySelector("#mensagem");

  if (chute === numeroSecreto) {
    mensagem.textContent = "Parabéns! Você acertou!";
  } else {
    mensagem.textContent = "Tente novamente!";
  }
}
