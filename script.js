const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const button = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");
const musicFocoInput = document.querySelector("#alternar-musica");
const music = new Audio("/sons/luna-rise-part-one.mp3");
music.loop = true;

let tempoDecorridoEmSeg = 5;
let intervalId = null;

musicFocoInput.addEventListener("change", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

focoBt.addEventListener("click", () => {
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
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
    zerar();
    alert('Tempo finalizado!');
    return;
  }
  tempoDecorridoEmSeg -= 1;
  console.log("Temporizador: " + tempoDecorridoEmSeg);
};

startPauseBt.addEventListener("click",  iniciarOuPausar);

function iniciarOuPausar() {
  if(intervalId){
    zerar();
    return;
  }
  intervalId = setInterval(contagemRegressiva, 1000);
}

function zerar(){
  clearInterval(intervalId); //para a execução
  intervalId = null;
}