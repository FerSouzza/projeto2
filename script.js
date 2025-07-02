function carregarJogo(nomeJogo) {
  const conteudo = document.getElementById('conteudo');
  const pasta = `jogos/${nomeJogo}`;

  conteudo.innerHTML = `
    <iframe src="${JogoNumeroSecreto}/index.html"
            width="100%" height="600"
            style="border:1px solid #ccc;">
    </iframe>`;
}
  conteudo.innerHTML = `
    <iframe src="${exemplometodolista}/index.html"
            width="100%" height="600"
            style="border:1px solid #ccc;">
    </iframe>`;
}
  conteudo.innerHTML = `
    <iframe src="${formulario}/index.html"
            width="100%" height="600"
            style="border:1px solid #ccc;">
    </iframe>`;
}
