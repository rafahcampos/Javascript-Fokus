const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const button = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");
const musicFocoInput = document.querySelector("#alternar-musica");
const iniciarOuPausarBt = document.querySelector("#start-pause span")
const playPauseImg = document.querySelector(".app__card-primary-butto-icon");
const tempoNaTela = document.querySelector("#timer");

const music = new Audio("/sons/luna-rise-part-one.mp3");
const audioTempFinalized = new Audio("/sons/beep.mp3");
const audtioPlay = new Audio("/sons/play.wav");
const audioPause = new Audio("/sons/pause.mp3");

let tempoDecorridoEmSeg = 1500;
let intervalId = null;
music.loop = true;

musicFocoInput.addEventListener("change", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

focoBt.addEventListener("click", () => {
  tempoDecorridoEmSeg = 1500;
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  tempoDecorridoEmSeg = 300;
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  tempoDecorridoEmSeg = 900;
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  mostrarTempo();
  button.forEach(function (contexto) {
    contexto.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      title.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong" id="titleStrong">mergulhe no que
                importa.</strong> `;
      break;
    case "descanso-curto":
      title.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong" id="titleStrong">Faça uma pausa curta!</strong> `;
      break;
    case "descanso-longo":
      title.innerHTML = `
                    Hora de voltar à superfície.<br>
                    <strong class="app__title-strong" id="titleStrong">Faça uma pausa longa.</strong> `;
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSeg <= 0) {
    audioTempFinalized.play();
    //alert('seu tempo acabou!');
    zerar();
    return;
  }
  tempoDecorridoEmSeg -= 1;
  mostrarTempo();
};

startPauseBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervalId) {
    audioPause.play();
    playPauseImg.setAttribute("src", "/imagens/play_arrow.png");
    zerar();
    return;
  }
  audtioPlay.play();
  intervalId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = "Pausar";
  playPauseImg.setAttribute("src", "/imagens/pause.png");
}

function zerar() {
  clearInterval(intervalId); //para a execução
  iniciarOuPausarBt.textContent = "Começar";
  playPauseImg.setAttribute("src", "/imagens/play_arrow.png");
  intervalId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSeg * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' });
  tempoNaTela.innerHTML = ` ${tempoFormatado}`;
}

mostrarTempo();