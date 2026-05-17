function normalizarTexto(texto = "") {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function carregarVozes() {
  return new Promise((resolve) => {
    let vozes = window.speechSynthesis.getVoices();

    if (vozes.length > 0) {
      resolve(vozes);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      vozes = window.speechSynthesis.getVoices();
      resolve(vozes);
    };

    setTimeout(() => {
      resolve(window.speechSynthesis.getVoices());
    }, 700);
  });
}

function escolherVoz(vozes, preferenciaVoz = "feminina") {
  const vozesPt = vozes.filter((voz) =>
    normalizarTexto(voz.lang).startsWith("pt")
  );

  const vozesDisponiveis = vozesPt.length > 0 ? vozesPt : vozes;

  const nomesFemininos = [
    "maria",
    "luciana",
    "helena",
    "francisca",
    "female",
    "feminina",
    "woman",
    "mulher"
  ];

  const nomesMasculinos = [
    "daniel",
    "felipe",
    "ricardo",
    "bruno",
    "thiago",
    "antonio",
    "male",
    "masculina",
    "man",
    "homem"
  ];

  const nomesPreferidos =
    preferenciaVoz === "masculina" ? nomesMasculinos : nomesFemininos;

  const vozEncontrada = vozesDisponiveis.find((voz) => {
    const nomeDaVoz = normalizarTexto(`${voz.name} ${voz.voiceURI}`);

    return nomesPreferidos.some((nome) =>
      nomeDaVoz.includes(normalizarTexto(nome))
    );
  });

  return vozEncontrada || vozesDisponiveis[0] || null;
}

export async function falar(frase, preferenciaVoz = "feminina") {
  if (!window.speechSynthesis) {
    alert("Seu navegador não suporta fala automática.");
    return;
  }

  window.speechSynthesis.cancel();

  const vozes = await carregarVozes();

  const vozSelecionada = escolherVoz(
    vozes,
    preferenciaVoz || "feminina"
  );

  const fala = new SpeechSynthesisUtterance(frase);

  fala.lang = vozSelecionada?.lang || "pt-BR";
  fala.rate = 0.9;
  fala.pitch = preferenciaVoz === "feminina" ? 1.2 : 0.9;

  if (vozSelecionada) {
    fala.voice = vozSelecionada;
  }

  window.speechSynthesis.speak(fala);
}