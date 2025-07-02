function carregarJogo(nomeJogo) {
  const conteudo = document.getElementById('conteudo');
  const pasta = `jogos/${nomeJogo}`;

  conteudo.innerHTML = `
    <iframe src="${pasta}/index.html"
            width="100%" height="600"
            style="border:1px solid #ccc;">
    </iframe>`;
}
