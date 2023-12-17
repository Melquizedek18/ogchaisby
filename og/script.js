// Função para exibir a notificação
function exibirNotificacao() {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notificacao = new Notification("Deseja ouvir uma música enquanto navega?", {
           body: "Clique em Sim para começar a reprodução automática.",
           icon: "notificacao.png"
  });

  // Adicione botões "Sim" e "Não" à notificação
  notificacao.actions = [
    { action: 'sim', title: 'Sim', icon: <i class="fa-solid fa-check"></i> },
    { action: 'nao', title: 'Não', icon: <i class="fa-solid fa-circle-xmark"></i> }
  ];

  // Adiciona um ouvinte para os cliques nos botões da notificação
  notificacao.onclick = function (event) {
    if (event.action === 'sim') {
      iniciarReproducao();
    } else if (event.action === 'nao') {
      // Adicione aqui o código para lidar com a escolha "Não"
    }
  };
}
});
}

  // Função para iniciar a reprodução automática
  function iniciarReproducao() {
    // Adicione aqui o código para iniciar a reprodução automática
    var audio = new Audio("Kanye West - New Again (Audio)_X74OxXravDo.mp3");
    audio.play();
  }
