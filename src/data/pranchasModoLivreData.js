const card = (comunicacaoId, titulo, frase, emoji) => ({
  comunicacaoId,
  titulo,
  frase,
  emoji
});

export const pranchasModoLivre = {
  "ajuda-na-escola": {
    titulo: "Ajuda na Escola",
    descricao: "Use esta prancha para pedir ajuda, explicar dificuldades e comunicar necessidades dentro da escola.",
    grupos: [
      {
        titulo: "Pedidos rápidos",
        comunicacoes: [
          card("educacao-ajuda-professor", "Ajuda", "Eu preciso de ajuda", "🤝"),
          card("educacao-nao-entendi", "Não entendi", "Eu não entendi", "❓"),
          card("educacao-repetir", "Repetir", "Repita, por favor", "🔁"),
          card("educacao-fale-devagar", "Fale devagar", "Fale devagar, por favor", "🐢"),
          card("educacao-pausa", "Pausa", "Eu preciso de uma pausa", "🛑"),
          card("educacao-terminei", "Terminei", "Eu terminei", "✅")
        ]
      },
      {
        titulo: "Necessidades na escola",
        comunicacoes: [
          card("educacao-banheiro", "Banheiro", "Eu preciso ir ao banheiro", "🚽"),
          card("educacao-agua", "Água", "Eu quero beber água", "💧"),
          card("educacao-lanche", "Lanche", "Eu quero lanchar", "🍎"),
          card("educacao-material", "Material", "Eu preciso do meu material", "🎒"),
          card("educacao-caderno", "Caderno", "Eu preciso do caderno", "📓"),
          card("educacao-lapis", "Lápis", "Eu preciso de um lápis", "✏️")
        ]
      }
    ]
  },

  "alfabeto": {
    titulo: "Alfabeto",
    descricao: "Use esta prancha para soletrar letras e formar palavras.",
    grupos: [
      {
        titulo: "Vogais",
        comunicacoes: [
          card("alfabeto-a", "A", "Letra A", "A"),
          card("alfabeto-e", "E", "Letra E", "E"),
          card("alfabeto-i", "I", "Letra I", "I"),
          card("alfabeto-o", "O", "Letra O", "O"),
          card("alfabeto-u", "U", "Letra U", "U")
        ]
      },
      {
        titulo: "Consoantes",
        comunicacoes: [
          card("alfabeto-b", "B", "Letra B", "B"),
          card("alfabeto-c", "C", "Letra C", "C"),
          card("alfabeto-d", "D", "Letra D", "D"),
          card("alfabeto-f", "F", "Letra F", "F"),
          card("alfabeto-g", "G", "Letra G", "G"),
          card("alfabeto-h", "H", "Letra H", "H"),
          card("alfabeto-j", "J", "Letra J", "J"),
          card("alfabeto-k", "K", "Letra K", "K"),
          card("alfabeto-l", "L", "Letra L", "L"),
          card("alfabeto-m", "M", "Letra M", "M"),
          card("alfabeto-n", "N", "Letra N", "N"),
          card("alfabeto-p", "P", "Letra P", "P"),
          card("alfabeto-q", "Q", "Letra Q", "Q"),
          card("alfabeto-r", "R", "Letra R", "R"),
          card("alfabeto-s", "S", "Letra S", "S"),
          card("alfabeto-t", "T", "Letra T", "T"),
          card("alfabeto-v", "V", "Letra V", "V"),
          card("alfabeto-w", "W", "Letra W", "W"),
          card("alfabeto-x", "X", "Letra X", "X"),
          card("alfabeto-y", "Y", "Letra Y", "Y"),
          card("alfabeto-z", "Z", "Letra Z", "Z")
        ]
      }
    ]
  },

  "animais": {
    titulo: "Animais",
    descricao: "Use esta prancha para comunicar nomes de animais.",
    grupos: [
      {
        titulo: "Animais",
        comunicacoes: [
          card("animais-cachorro", "Cachorro", "Cachorro", "🐶"),
          card("animais-gato", "Gato", "Gato", "🐱"),
          card("animais-passaro", "Pássaro", "Pássaro", "🐦"),
          card("animais-peixe", "Peixe", "Peixe", "🐟"),
          card("animais-cavalo", "Cavalo", "Cavalo", "🐴"),
          card("animais-vaca", "Vaca", "Vaca", "🐮"),
          card("animais-galinha", "Galinha", "Galinha", "🐔"),
          card("animais-pato", "Pato", "Pato", "🦆")
        ]
      }
    ]
  },

  "espacos-da-escola": {
    titulo: "Espaços da Escola",
    descricao: "Use esta prancha para indicar lugares dentro da escola.",
    grupos: [
      {
        titulo: "Lugares da escola",
        comunicacoes: [
          card("escola-sala", "Sala de aula", "Eu quero ir para a sala de aula", "🏫"),
          card("escola-banheiro", "Banheiro", "Eu quero ir ao banheiro", "🚽"),
          card("escola-patio", "Pátio", "Eu quero ir ao pátio", "🌳"),
          card("escola-biblioteca", "Biblioteca", "Eu quero ir à biblioteca", "📚"),
          card("escola-refeitorio", "Refeitório", "Eu quero ir ao refeitório", "🍽️"),
          card("escola-quadra", "Quadra", "Eu quero ir à quadra", "🏀"),
          card("escola-secretaria", "Secretaria", "Eu quero ir à secretaria", "🗂️"),
          card("escola-portaria", "Portaria", "Eu quero ir à portaria", "🚪")
        ]
      }
    ]
  },

  "numeros": {
    titulo: "Números",
    descricao: "Use esta prancha para comunicar números e quantidades.",
    grupos: [
      {
        titulo: "Números",
        comunicacoes: [
          card("numero-0", "0", "Zero", "0️⃣"),
          card("numero-1", "1", "Um", "1️⃣"),
          card("numero-2", "2", "Dois", "2️⃣"),
          card("numero-3", "3", "Três", "3️⃣"),
          card("numero-4", "4", "Quatro", "4️⃣"),
          card("numero-5", "5", "Cinco", "5️⃣"),
          card("numero-6", "6", "Seis", "6️⃣"),
          card("numero-7", "7", "Sete", "7️⃣"),
          card("numero-8", "8", "Oito", "8️⃣"),
          card("numero-9", "9", "Nove", "9️⃣"),
          card("numero-10", "10", "Dez", "🔟")
        ]
      }
    ]
  },

  "bebidas": {
    titulo: "Bebidas",
    descricao: "Use esta prancha para pedir bebidas.",
    grupos: [
      {
        titulo: "Bebidas",
        comunicacoes: [
          card("bebidas-agua", "Água", "Eu quero água", "💧"),
          card("bebidas-agua-gelada", "Água gelada", "Eu quero água gelada", "🧊"),
          card("bebidas-suco", "Suco", "Eu quero suco", "🧃"),
          card("bebidas-leite", "Leite", "Eu quero leite", "🥛"),
          card("bebidas-cha", "Chá", "Eu quero chá", "🍵"),
          card("bebidas-vitamina", "Vitamina", "Eu quero vitamina", "🥤"),
          card("bebidas-achocolatado", "Achocolatado", "Eu quero achocolatado", "🍫"),
          card("bebidas-refrigerante", "Refrigerante", "Eu quero refrigerante", "🥤")
        ]
      }
    ]
  },

  "comidas": {
    titulo: "Comidas",
    descricao: "Use esta prancha para escolher ou pedir comidas.",
    grupos: [
      {
        titulo: "Comidas",
        comunicacoes: [
          card("comidas-arroz", "Arroz", "Eu quero arroz", "🍚"),
          card("comidas-feijao", "Feijão", "Eu quero feijão", "🥣"),
          card("comidas-carne", "Carne", "Eu quero carne", "🥩"),
          card("comidas-frango", "Frango", "Eu quero frango", "🍗"),
          card("comidas-peixe", "Peixe", "Eu quero peixe", "🐟"),
          card("comidas-ovo", "Ovo", "Eu quero ovo", "🥚"),
          card("comidas-pao", "Pão", "Eu quero pão", "🍞"),
          card("comidas-macarrao", "Macarrão", "Eu quero macarrão", "🍝")
        ]
      }
    ]
  },

  "frutas": {
    titulo: "Frutas",
    descricao: "Use esta prancha para escolher frutas.",
    grupos: [
      {
        titulo: "Frutas",
        comunicacoes: [
          card("frutas-banana", "Banana", "Eu quero banana", "🍌"),
          card("frutas-maca", "Maçã", "Eu quero maçã", "🍎"),
          card("frutas-uva", "Uva", "Eu quero uva", "🍇"),
          card("frutas-morango", "Morango", "Eu quero morango", "🍓"),
          card("frutas-laranja", "Laranja", "Eu quero laranja", "🍊"),
          card("frutas-melancia", "Melancia", "Eu quero melancia", "🍉"),
          card("frutas-mamao", "Mamão", "Eu quero mamão", "🟠"),
          card("frutas-manga", "Manga", "Eu quero manga", "🥭")
        ]
      }
    ]
  },

  "refeicoes": {
    titulo: "Refeições",
    descricao: "Use esta prancha para falar sobre refeições e fome.",
    grupos: [
      {
        titulo: "Refeições",
        comunicacoes: [
          card("refeicoes-cafe", "Café da manhã", "Eu quero tomar café da manhã", "☕"),
          card("refeicoes-almoco", "Almoço", "Eu quero almoçar", "🍽️"),
          card("refeicoes-lanche", "Lanche", "Eu quero lanchar", "🥪"),
          card("refeicoes-jantar", "Jantar", "Eu quero jantar", "🍲"),
          card("refeicoes-sobremesa", "Sobremesa", "Eu quero sobremesa", "🍮"),
          card("refeicoes-fome", "Fome", "Eu estou com fome", "😋"),
          card("refeicoes-satisfeito", "Satisfeito", "Eu estou satisfeito", "✅"),
          card("refeicoes-nao-quero", "Não quero comer", "Eu não quero comer", "🚫")
        ]
      }
    ]
  },

  "vegetais": {
    titulo: "Vegetais",
    descricao: "Use esta prancha para escolher vegetais e legumes.",
    grupos: [
      {
        titulo: "Vegetais",
        comunicacoes: [
          card("vegetais-alface", "Alface", "Eu quero alface", "🥬"),
          card("vegetais-tomate", "Tomate", "Eu quero tomate", "🍅"),
          card("vegetais-cenoura", "Cenoura", "Eu quero cenoura", "🥕"),
          card("vegetais-batata", "Batata", "Eu quero batata", "🥔"),
          card("vegetais-brocolis", "Brócolis", "Eu quero brócolis", "🥦"),
          card("vegetais-milho", "Milho", "Eu quero milho", "🌽"),
          card("vegetais-pepino", "Pepino", "Eu quero pepino", "🥒"),
          card("vegetais-beterraba", "Beterraba", "Eu quero beterraba", "🟣")
        ]
      }
    ]
  },

  "nivel-de-dor": {
    titulo: "Nível de Dor",
    descricao: "Use esta prancha para comunicar intensidade e local da dor.",
    grupos: [
      {
        titulo: "Intensidade da dor",
        comunicacoes: [
          card("dor-sem-dor", "Sem dor", "Eu estou sem dor", "🙂"),
          card("dor-pouca", "Pouca dor", "Eu estou com pouca dor", "😐"),
          card("dor-media", "Dor média", "Eu estou com dor média", "😟"),
          card("dor-forte", "Dor forte", "Eu estou com dor forte", "😣"),
          card("dor-muita", "Muita dor", "Eu estou com muita dor", "😭")
        ]
      },
      {
        titulo: "Onde dói",
        comunicacoes: [
          card("dor-cabeca", "Cabeça", "Estou com dor de cabeça", "🤕"),
          card("dor-barriga", "Barriga", "Estou com dor na barriga", "🤢"),
          card("dor-garganta", "Garganta", "Estou com dor na garganta", "🗣️"),
          card("dor-dente", "Dente", "Estou com dor de dente", "🦷"),
          card("dor-ouvido", "Ouvido", "Estou com dor no ouvido", "👂")
        ]
      }
    ]
  },

  "partes-do-corpo": {
    titulo: "Partes do Corpo",
    descricao: "Use esta prancha para indicar partes do corpo.",
    grupos: [
      {
        titulo: "Corpo",
        comunicacoes: [
          card("corpo-cabeca", "Cabeça", "Cabeça", "🙂"),
          card("corpo-olhos", "Olhos", "Olhos", "👀"),
          card("corpo-ouvido", "Ouvido", "Ouvido", "👂"),
          card("corpo-boca", "Boca", "Boca", "👄"),
          card("corpo-garganta", "Garganta", "Garganta", "🗣️"),
          card("corpo-braco", "Braço", "Braço", "💪"),
          card("corpo-mao", "Mão", "Mão", "✋"),
          card("corpo-barriga", "Barriga", "Barriga", "🤰"),
          card("corpo-perna", "Perna", "Perna", "🦵"),
          card("corpo-pe", "Pé", "Pé", "🦶")
        ]
      }
    ]
  },

  "profissionais-da-saude": {
    titulo: "Profissionais da Saúde",
    descricao: "Use esta prancha para pedir ou identificar profissionais da saúde.",
    grupos: [
      {
        titulo: "Profissionais",
        comunicacoes: [
          card("saude-medico", "Médico", "Eu quero falar com o médico", "👨‍⚕️"),
          card("saude-medica", "Médica", "Eu quero falar com a médica", "👩‍⚕️"),
          card("saude-enfermeiro", "Enfermeiro", "Eu quero falar com o enfermeiro", "🧑‍⚕️"),
          card("saude-psicologo", "Psicólogo", "Eu quero falar com o psicólogo", "🧠"),
          card("saude-fono", "Fonoaudiólogo", "Eu quero falar com o fonoaudiólogo", "🗣️"),
          card("saude-dentista", "Dentista", "Eu quero falar com o dentista", "🦷"),
          card("saude-fisioterapeuta", "Fisioterapeuta", "Eu quero falar com o fisioterapeuta", "🦵")
        ]
      }
    ]
  },

  "saude": {
    titulo: "Saúde",
    descricao: "Use esta prancha para comunicar sintomas e necessidades de saúde.",
    grupos: [
      {
        titulo: "Sintomas e cuidados",
        comunicacoes: [
          card("saude-doente", "Estou doente", "Eu estou doente", "🤒"),
          card("saude-febre", "Febre", "Eu estou com febre", "🌡️"),
          card("saude-enjoo", "Enjoo", "Eu estou com enjoo", "🤢"),
          card("saude-tosse", "Tosse", "Eu estou tossindo", "😷"),
          card("saude-remedio", "Remédio", "Eu preciso de remédio", "💊"),
          card("saude-curativo", "Curativo", "Eu preciso de curativo", "🩹"),
          card("saude-hospital", "Hospital", "Eu preciso ir ao hospital", "🏥"),
          card("saude-descansar", "Descansar", "Eu preciso descansar", "🛌")
        ]
      }
    ]
  },

  "sensacoes": {
    titulo: "Sensações",
    descricao: "Use esta prancha para comunicar sensações físicas e emocionais.",
    grupos: [
      {
        titulo: "Sensações",
        comunicacoes: [
          card("sensacoes-frio", "Frio", "Eu estou com frio", "🥶"),
          card("sensacoes-calor", "Calor", "Eu estou com calor", "🥵"),
          card("sensacoes-sono", "Sono", "Eu estou com sono", "😴"),
          card("sensacoes-cansado", "Cansado", "Eu estou cansado", "😓"),
          card("sensacoes-fome", "Fome", "Eu estou com fome", "🍽️"),
          card("sensacoes-sede", "Sede", "Eu estou com sede", "💧"),
          card("sensacoes-tontura", "Tontura", "Eu estou com tontura", "😵"),
          card("sensacoes-coceira", "Coceira", "Eu estou com coceira", "🖐️"),
          card("sensacoes-medo", "Medo", "Eu estou com medo", "😨"),
          card("sensacoes-ansioso", "Ansioso", "Eu estou ansioso", "😟")
        ]
      }
    ]
  },

  "banheiro": {
    titulo: "Banheiro",
    descricao: "Use esta prancha para comunicar necessidades relacionadas ao banheiro.",
    grupos: [
      {
        titulo: "Banheiro",
        comunicacoes: [
          card("banheiro-ir", "Ir ao banheiro", "Eu preciso ir ao banheiro", "🚽"),
          card("banheiro-vaso", "Vaso sanitário", "Eu preciso usar o vaso sanitário", "🚽"),
          card("banheiro-pia", "Pia", "Eu quero usar a pia", "🚰"),
          card("banheiro-lavar-maos", "Lavar as mãos", "Eu quero lavar as mãos", "🧼"),
          card("banheiro-escovar-dentes", "Escovar os dentes", "Eu quero escovar os dentes", "🪥"),
          card("banheiro-banho", "Tomar banho", "Eu quero tomar banho", "🚿"),
          card("banheiro-papel", "Papel higiênico", "Eu preciso de papel higiênico", "🧻"),
          card("banheiro-sabonete", "Sabonete", "Eu preciso de sabonete", "🧼")
        ]
      }
    ]
  },

  "cozinha": {
    titulo: "Cozinha",
    descricao: "Use esta prancha para comunicar objetos e ações da cozinha.",
    grupos: [
      {
        titulo: "Cozinha",
        comunicacoes: [
          card("cozinha-ir", "Cozinha", "Eu quero ir para a cozinha", "🍳"),
          card("cozinha-geladeira", "Geladeira", "Eu quero abrir a geladeira", "🧊"),
          card("cozinha-fogao", "Fogão", "Fogão", "🔥"),
          card("cozinha-mesa", "Mesa", "Eu quero sentar na mesa", "🪑"),
          card("cozinha-copo", "Copo", "Eu preciso de um copo", "🥛"),
          card("cozinha-prato", "Prato", "Eu preciso de um prato", "🍽️"),
          card("cozinha-colher", "Colher", "Eu preciso de uma colher", "🥄"),
          card("cozinha-garfo", "Garfo", "Eu preciso de um garfo", "🍴"),
          card("cozinha-microondas", "Micro-ondas", "Eu quero usar o micro-ondas", "♨️")
        ]
      }
    ]
  },

  "estabelecimentos": {
    titulo: "Estabelecimentos",
    descricao: "Use esta prancha para indicar lugares fora de casa.",
    grupos: [
      {
        titulo: "Estabelecimentos",
        comunicacoes: [
          card("estabelecimentos-mercado", "Mercado", "Eu quero ir ao mercado", "🛒"),
          card("estabelecimentos-farmacia", "Farmácia", "Eu quero ir à farmácia", "💊"),
          card("estabelecimentos-hospital", "Hospital", "Eu quero ir ao hospital", "🏥"),
          card("estabelecimentos-escola", "Escola", "Eu quero ir à escola", "🏫"),
          card("estabelecimentos-padaria", "Padaria", "Eu quero ir à padaria", "🥖"),
          card("estabelecimentos-restaurante", "Restaurante", "Eu quero ir ao restaurante", "🍽️"),
          card("estabelecimentos-shopping", "Shopping", "Eu quero ir ao shopping", "🛍️"),
          card("estabelecimentos-praca", "Praça", "Eu quero ir à praça", "🌳"),
          card("estabelecimentos-banco", "Banco", "Eu quero ir ao banco", "🏦"),
          card("estabelecimentos-loja", "Loja", "Eu quero ir à loja", "🏬")
        ]
      }
    ]
  },

  "quarto": {
    titulo: "Quarto",
    descricao: "Use esta prancha para comunicar objetos e ações do quarto.",
    grupos: [
      {
        titulo: "Quarto",
        comunicacoes: [
          card("quarto-ir", "Quarto", "Eu quero ir para o quarto", "🛏️"),
          card("quarto-cama", "Cama", "Eu quero ir para a cama", "🛏️"),
          card("quarto-travesseiro", "Travesseiro", "Eu quero o travesseiro", "🛌"),
          card("quarto-cobertor", "Cobertor", "Eu quero o cobertor", "🧣"),
          card("quarto-guarda-roupa", "Guarda-roupa", "Eu quero pegar uma roupa", "👕"),
          card("quarto-brinquedo", "Brinquedo", "Eu quero meu brinquedo", "🧸"),
          card("quarto-luz", "Luz", "Acenda a luz, por favor", "💡"),
          card("quarto-dormir", "Dormir", "Eu quero dormir", "😴"),
          card("quarto-trocar-roupa", "Trocar roupa", "Eu quero trocar de roupa", "👚")
        ]
      }
    ]
  },

  "sala": {
    titulo: "Sala",
    descricao: "Use esta prancha para comunicar objetos e ações da sala.",
    grupos: [
      {
        titulo: "Sala",
        comunicacoes: [
          card("sala-ir", "Sala", "Eu quero ir para a sala", "🛋️"),
          card("sala-sofa", "Sofá", "Eu quero sentar no sofá", "🛋️"),
          card("sala-televisao", "Televisão", "Eu quero assistir televisão", "📺"),
          card("sala-controle", "Controle", "Eu quero o controle", "🎮"),
          card("sala-janela", "Janela", "Abra a janela, por favor", "🪟"),
          card("sala-porta", "Porta", "Abra a porta, por favor", "🚪"),
          card("sala-ventilador", "Ventilador", "Ligue o ventilador, por favor", "🌀"),
          card("sala-brincar", "Brincar", "Eu quero brincar na sala", "🧸"),
          card("sala-ficar-aqui", "Ficar aqui", "Eu quero ficar aqui", "📍")
        ]
      }
    ]
  }
};