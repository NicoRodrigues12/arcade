const jogos = [
    { nome: 'Mineirinho', categoria: 'Aventura', descricao: 'Se Aventure com o Mineirinho.', emoji: '⛏️', cor: '#276448' },
    { nome: 'Mario Kart', categoria: 'Corrida', descricao: 'Corridas com muita diversão.', emoji: '🏎️', cor: '#bf513c' },
    { nome: 'Stardew Valley', categoria: 'Aventura', descricao: 'Cuide da sua própria fazenda.', emoji: '🌻', cor: '#b7833c' },
    { nome: 'Roube um Exu', categoria: 'Estratégia', descricao: 'Seja o mais rapido na arte de roubar Exus.', emoji: '👿', cor: '#803d78' },
    { nome: 'Sifu Demo', categoria: 'Aventura', descricao: 'Explore um reino misterioso.', emoji: '🗡️', cor: '#354e86' },
    { nome: 'Rocket League', categoria: 'Corrida', descricao: 'Carros, futebol e muito estresse.', emoji: '⚽', cor: '#266ca4' },
    { nome: 'Terraria', categoria: 'Aventura', descricao: 'Aventure-se e enfrente monstros.', emoji: '🌳', cor: '#3b8567' },
    { nome: 'Tetris', categoria: 'Estratégia', descricao: 'Encaixe as peça no buraco.', emoji: '🧩', cor: '#6651ad' }
  ];

  var gradeJogos = document.querySelector("#grade")

  function mostrarJogos(){
   gradeJogos.innerHTML = "";

jogos.forEach(jogo => {
    gradeJogos.innerHTML+=`
    <article class="card">
    <div class="capa" style="background: ${jogo.cor}">${jogo.emoji}</div>
    <div class="conteudo-card">
    <h3>${jogo.nome}</h3>
    <p>${jogo.descricao}</p>
    <span>${jogo.categoria}</span>
    </div>
    </article>
    `
})

  }

  mostrarJogos()