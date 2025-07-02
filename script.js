function jogoUm() {
  document.getElementById('conteudo').innerHTML = `
    <form id="formulario">
      ${[1, 2, 3, 4, 5].map(i => `<input type="text" id="valor${i}" placeholder="Valor ${i}" required><br>`).join('')}
      <button type="submit">Salvar</button>
    </form>
  `;

  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const valores = [];
    for (let i = 1; i <= 5; i++) {
      const valor = document.getElementById(`valor${i}`).value.trim();
      if (valor === "") {
        alert(`O campo Valor ${i} está vazio.`);
        return;
      }
      valores.push(valor);
    }

    const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n");
    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "valores.txt";
    link.click();
  });
}

function jogoDois() {
  document.getElementById('conteudo').innerHTML = `
    <h2>Jogo do Número Secreto</h2>
    <p></p>
    <input type="number" min="1" max="10" />
    <button onclick="verificarChute()">Chutar</button>
    <button id="reiniciar" onclick="reiniciarJogo()" disabled>Reiniciar</button>
  `;

  window.listaDeNumerosSorteados = [];
  window.numeroLimite = 10;
  window.numeroSecreto = gerarNumeroAleatorio();
  window.tentativas = 1;

  exibirMensagemInicial();
}

function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h2', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
  const chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h2', 'Acertou!');
    const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    const mensagem = `Você descobriu o número com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagem);
    document.getElementById('reiniciar').disabled = false;
  } else {
    const dica = chute > numeroSecreto ? 'menor' : 'maior';
    exibirTextoNaTela('p', `O número secreto é ${dica}`);
    tentativas++;
    document.querySelector('input').value = '';
  }
}

function gerarNumeroAleatorio() {
  const numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  if (listaDeNumerosSorteados.length === numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }
  listaDeNumerosSorteados.push(numeroEscolhido);
  return numeroEscolhido;
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  exibirMensagemInicial();
  document.querySelector('input').value = '';
  document.getElementById('reiniciar').disabled = true;
}

function jogoTres() {
  document.getElementById('conteudo').innerHTML = `
    <h2>Manipulando Frutas</h2>
    <input type="text" id="frutaInput" placeholder="Digite uma fruta">
    <button onclick="adicionarFruta()">Adicionar</button>
    <div id="listaFrutas"></div>
    <div id="saida"></div>
    <button onclick="metodo('push')">Push</button>
    <button onclick="metodo('pop')">Pop</button>
    <button onclick="metodo('shift')">Shift</button>
    <button onclick="metodo('unshift')">Unshift</button>
    <button onclick="verificarBanana()">Verificar Banana</button>
    <button onclick="mostrarIndex(prompt('Qual fruta buscar?'))">Buscar Posição</button>
    <button onclick="mostrarJoin()">Join</button>
    <button onclick="mostrarSlice()">Slice</button>
    <button onclick="fazerSplice()">Splice</button>
    <button onclick="mapMaiusculas()">Map maiúsculas</button>
    <button onclick="filtrarGrandes()">Filtrar grandes</button>
  `;

  window.frutas = [];
  atualizarLista();
}

function atualizarLista() {
  document.getElementById('listaFrutas').textContent = JSON.stringify(frutas);
}

function adicionarFruta() {
  const input = document.getElementById('frutaInput');
  const valor = input.value.trim();
  if (valor) {
    frutas.push(valor);
    input.value = '';
    atualizarLista();
  }
}

function metodo(acao) {
  if (acao === 'push') {
    const fruta = prompt("Digite uma fruta para adicionar no final:");
    if (fruta) frutas.push(fruta);
  } else if (acao === 'pop') {
    frutas.pop();
  } else if (acao === 'shift') {
    frutas.shift();
  } else if (acao === 'unshift') {
    const fruta = prompt("Digite uma fruta para adicionar no início:");
    if (fruta) frutas.unshift(fruta);
  }
  atualizarLista();
}

function verificarBanana() {
  const resultado = frutas.includes('banana')
    ? "🍌 Banana está no array!"
    : "🚫 Banana NÃO está no array.";
  document.getElementById('saida').textContent = resultado;
}

function mostrarIndex(fruta) {
  const index = frutas.indexOf(fruta);
  const resultado = index !== -1
    ? `A fruta '${fruta}' está na posição ${index}.`
    : `'${fruta}' não foi encontrada.`;
  document.getElementById('saida').textContent = resultado;
}

function mostrarJoin() {
  document.getElementById('saida').textContent = "join(', '): " + frutas.join(', ');
}

function mostrarSlice() {
  const fatiado = frutas.slice(1, 3);
  document.getElementById('saida').textContent = "slice(1, 3): " + JSON.stringify(fatiado);
}

function fazerSplice() {
  frutas.splice(1, 1);
  atualizarLista();
  document.getElementById('saida').textContent = "splice(1, 1) aplicado.";
}

function mapMaiusculas() {
  const maiusculas = frutas.map(f => f.toUpperCase());
  document.getElementById('saida').textContent = "map (toUpperCase): " + JSON.stringify(maiusculas);
}

function filtrarGrandes() {
  const grandes = frutas.filter(f => f.length > 4);
  document.getElementById('saida').textContent = "filter (length > 4): " + JSON.stringify(grandes);
}
