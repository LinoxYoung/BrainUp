const allQuestions = [
  {
    question: "Quanto é 7 + 8?",
    answers: ["13", "14", "15", "16"],
    correct: 2,
    explanation: "7 + 8 = 15."
  },
  {
    question: "Quanto é 9 x 6?",
    answers: ["54", "56", "48", "52"],
    correct: 0,
    explanation: "9 multiplicado por 6 é 54."
  },
  {
    question: "Quanto é 45 - 19?",
    answers: ["24", "25", "26", "27"],
    correct: 2,
    explanation: "45 - 19 = 26."
  },
  {
    question: "Quanto é 81 ÷ 9?",
    answers: ["7", "8", "9", "10"],
    correct: 2,
    explanation: "81 dividido por 9 é 9."
  },
  {
    question: "Quanto é 12 x 11?",
    answers: ["122", "132", "144", "121"],
    correct: 1,
    explanation: "12 × 11 = 132."
  },
  {
    question: "Quanto é 6²?",
    answers: ["12", "18", "36", "24"],
    correct: 2,
    explanation: "6 ao quadrado é 36."
  },
  {
    question: "Quanto é 15 + 27?",
    answers: ["40", "42", "44", "46"],
    correct: 1,
    explanation: "15 + 27 = 42."
  },
  {
    question: "Quanto é 64 ÷ 8?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "64 dividido por 8 é 8."
  },
  {
    question: "Quanto é 14 x 5?",
    answers: ["60", "70", "75", "65"],
    correct: 1,
    explanation: "14 × 5 = 70."
  },
  {
    question: "Quanto é 100 - 37?",
    answers: ["63", "64", "65", "66"],
    correct: 0,
    explanation: "100 - 37 = 63."
  },
  {
    question: "Quanto é 8³?",
    answers: ["256", "512", "64", "128"],
    correct: 1,
    explanation: "8 × 8 × 8 = 512."
  },
  {
    question: "Quanto é 18 x 3?",
    answers: ["54", "48", "56", "52"],
    correct: 0,
    explanation: "18 × 3 = 54."
  },
  {
    question: "Quanto é 144 ÷ 12?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
    explanation: "144 dividido por 12 é 12."
  },
  {
    question: "Quanto é 23 + 19?",
    answers: ["40", "41", "42", "43"],
    correct: 2,
    explanation: "23 + 19 = 42."
  },
  {
    question: "Quanto é 72 ÷ 6?",
    answers: ["11", "12", "13", "14"],
    correct: 1,
    explanation: "72 dividido por 6 é 12."
  },
  {
    question: "Quanto é 9²?",
    answers: ["81", "72", "64", "99"],
    correct: 0,
    explanation: "9 ao quadrado é 81."
  },
  {
    question: "Quanto é 50 + 38?",
    answers: ["86", "88", "90", "92"],
    correct: 1,
    explanation: "50 + 38 = 88."
  },
  {
    question: "Quanto é 120 ÷ 10?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
    explanation: "120 dividido por 10 é 12."
  },
  {
    question: "Quanto é 16 x 4?",
    answers: ["64", "66", "62", "60"],
    correct: 0,
    explanation: "16 × 4 = 64."
  },
  {
    question: "Quanto é 95 - 48?",
    answers: ["45", "46", "47", "48"],
    correct: 2,
    explanation: "95 - 48 = 47."
  },
  {
    question: "Quanto é 13 x 7?",
    answers: ["91", "84", "87", "94"],
    correct: 0,
    explanation: "13 × 7 = 91."
  },
  {
    question: "Quanto é 200 ÷ 5?",
    answers: ["30", "40", "50", "60"],
    correct: 1,
    explanation: "200 dividido por 5 é 40."
  },
  {
    question: "Quanto é 4³?",
    answers: ["12", "16", "64", "32"],
    correct: 2,
    explanation: "4 × 4 × 4 = 64."
  },
  {
    question: "Quanto é 28 + 35?",
    answers: ["61", "62", "63", "64"],
    correct: 2,
    explanation: "28 + 35 = 63."
  },
  {
    question: "Quanto é 90 ÷ 9?",
    answers: ["9", "10", "11", "12"],
    correct: 1,
    explanation: "90 dividido por 9 é 10."
  },
  {
    question: "Quanto é 17 x 6?",
    answers: ["102", "98", "104", "108"],
    correct: 0,
    explanation: "17 × 6 = 102."
  },
  {
    question: "Quanto é 150 - 75?",
    answers: ["70", "75", "80", "85"],
    correct: 1,
    explanation: "150 - 75 = 75."
  },
  {
    question: "Quanto é 11²?",
    answers: ["121", "111", "131", "141"],
    correct: 0,
    explanation: "11 ao quadrado é 121."
  },
  {
    question: "Quanto é 36 ÷ 4?",
    answers: ["8", "9", "10", "11"],
    correct: 1,
    explanation: "36 dividido por 4 é 9."
  },
  {
    question: "Quanto é 19 + 24?",
    answers: ["41", "42", "43", "44"],
    correct: 2,
    explanation: "19 + 24 = 43."
  },
  {
    question: "Quanto é 8 x 12?",
    answers: ["88", "96", "92", "100"],
    correct: 1,
    explanation: "8 × 12 = 96."
  },
  {
    question: "Quanto é 250 ÷ 5?",
    answers: ["45", "50", "55", "60"],
    correct: 1,
    explanation: "250 dividido por 5 é 50."
  },
  {
    question: "Quanto é 20²?",
    answers: ["200", "300", "400", "500"],
    correct: 2,
    explanation: "20 × 20 = 400."
  },
  {
    question: "Quanto é 33 + 44?",
    answers: ["75", "76", "77", "78"],
    correct: 2,
    explanation: "33 + 44 = 77."
  },
  {
    question: "Quanto é 81 ÷ 3?",
    answers: ["27", "26", "28", "25"],
    correct: 0,
    explanation: "81 dividido por 3 é 27."
  },
  {
    question: "Quanto é 14²?",
    answers: ["196", "186", "176", "206"],
    correct: 0,
    explanation: "14 × 14 = 196."
  },
  {
    question: "Quanto é 48 ÷ 6?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "48 dividido por 6 é 8."
  },
  {
    question: "Quanto é 22 + 39?",
    answers: ["59", "60", "61", "62"],
    correct: 2,
    explanation: "22 + 39 = 61."
  },
  {
    question: "Quanto é 13²?",
    answers: ["169", "159", "179", "189"],
    correct: 0,
    explanation: "13 × 13 = 169."
  },
  {
    question: "Quanto é 75 ÷ 5?",
    answers: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "75 dividido por 5 é 15."
  },
  {
    question: "Quanto é 16²?",
    answers: ["256", "246", "266", "276"],
    correct: 0,
    explanation: "16 × 16 = 256."
  },
  {
    question: "Quanto é 7 x 13?",
    answers: ["91", "81", "101", "87"],
    correct: 0,
    explanation: "7 × 13 = 91."
  },
  {
    question: "Quanto é 60 ÷ 4?",
    answers: ["12", "13", "14", "15"],
    correct: 3,
    explanation: "60 dividido por 4 é 15."
  },
  {
    question: "Quanto é 5²?",
    answers: ["20", "15", "25", "30"],
    correct: 2,
    explanation: "5 × 5 = 25."
  },
  {
    question: "Quanto é 18 + 27?",
    answers: ["43", "44", "45", "46"],
    correct: 2,
    explanation: "18 + 27 = 45."
  },
  {
    question: "Quanto é 144 ÷ 6?",
    answers: ["22", "23", "24", "25"],
    correct: 2,
    explanation: "144 dividido por 6 é 24."
  },
  {
    question: "Quanto é 10³?",
    answers: ["100", "1000", "500", "10000"],
    correct: 1,
    explanation: "10 × 10 × 10 = 1000."
  },
  {
    question: "Quanto é 32 + 18?",
    answers: ["48", "49", "50", "51"],
    correct: 2,
    explanation: "32 + 18 = 50."
  },
  {
    question: "Quanto é 96 ÷ 8?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
    explanation: "96 dividido por 8 é 12."
  },
  {
    question: "Qual palavra está escrita corretamente?",
    answers: ["Excessão", "Exceção", "Excesssão", "Exsesão"],
    correct: 1,
    explanation: "A forma correta é 'exceção'."
  },
  {
    question: "Qual é o plural de 'cão'?",
    answers: ["Cãos", "Cães", "Cões", "Cãeses"],
    correct: 1,
    explanation: "O plural irregular de 'cão' mais comum é 'cães'."
  },
  {
    question: "Qual dessas palavras é um verbo?",
    answers: ["Correr", "Bonito", "Casa", "Azul"],
    correct: 0,
    explanation: "'Correr' indica ação, portanto é um verbo."
  },
  {
    question: "Qual palavra é um substantivo?",
    answers: ["Rapidamente", "Mesa", "Cantar", "Azul"],
    correct: 1,
    explanation: "'Mesa' é um substantivo."
  },
  {
    question: "Qual dessas palavras é um adjetivo?",
    answers: ["Felicidade", "Bonito", "Correr", "Ontem"],
    correct: 1,
    explanation: "'Bonito' é um adjetivo pois caracteriza algo."
  },
  {
    question: "Qual palavra é um advérbio?",
    answers: ["Rapidamente", "Casa", "Livro", "Menino"],
    correct: 0,
    explanation: "'Rapidamente' indica modo, sendo advérbio."
  },
  {
    question: "Qual é o antônimo de 'feliz'?",
    answers: ["Triste", "Alegre", "Contente", "Animado"],
    correct: 0,
    explanation: "Antônimo é palavra de sentido oposto."
  },
  {
    question: "Qual é o sinônimo de 'rápido'?",
    answers: ["Devagar", "Lento", "Veloz", "Parado"],
    correct: 2,
    explanation: "'Veloz' tem significado semelhante a rápido."
  },
  {
    question: "Qual dessas frases está correta?",
    answers: [
      "Eu vi ela ontem.",
      "Eu a vi ontem.",
      "Eu vi ela ontems.",
      "Eu viu ela ontem."
    ],
    correct: 1,
    explanation: "A forma culta usa o pronome 'a' antes do verbo."
  },
  {
    question: "Qual é o plural de 'flor'?",
    answers: ["Flores", "Flors", "Florres", "Flore"],
    correct: 0,
    explanation: "O plural de flor é flores."
  },
  {
    question: "Qual dessas palavras possui acento?",
    answers: ["Cafe", "Aviao", "Lápis", "Carro"],
    correct: 2,
    explanation: "'Lápis' possui acento agudo."
  },
  {
    question: "Qual é o feminino de 'ator'?",
    answers: ["Atriz", "Atora", "Atriza", "Atorina"],
    correct: 0,
    explanation: "O feminino correto de ator é atriz."
  },
  {
    question: "Qual palavra está no diminutivo?",
    answers: ["Casinha", "Casa", "Casar", "Casado"],
    correct: 0,
    explanation: "'Casinha' é o diminutivo de casa."
  },
  {
    question: "Qual é o aumentativo de 'casa'?",
    answers: ["Casão", "Casinha", "Casal", "Casudo"],
    correct: 0,
    explanation: "'Casão' indica aumento."
  },
  {
    question: "Qual dessas palavras é um pronome?",
    answers: ["Ele", "Mesa", "Bonito", "Correr"],
    correct: 0,
    explanation: "'Ele' é pronome pessoal."
  },
  {
    question: "Qual dessas palavras é uma preposição?",
    answers: ["Para", "Casa", "Correr", "Bonito"],
    correct: 0,
    explanation: "'Para' é preposição."
  },
  {
    question: "Qual dessas palavras é uma conjunção?",
    answers: ["E", "Mesa", "Azul", "Correr"],
    correct: 0,
    explanation: "'E' liga palavras ou orações."
  },
  {
    question: "Qual dessas palavras é um artigo?",
    answers: ["O", "Mesa", "Correr", "Bonito"],
    correct: 0,
    explanation: "'O' é artigo definido."
  },
  {
    question: "Qual dessas palavras está no plural?",
    answers: ["Carro", "Cadeiras", "Mesa", "Livro"],
    correct: 1,
    explanation: "'Cadeiras' está no plural."
  },
  {
    question: "Qual dessas palavras está no singular?",
    answers: ["Livros", "Mesas", "Cadeira", "Casas"],
    correct: 2,
    explanation: "'Cadeira' está no singular."
  },

  {
    question: "Qual é o coletivo de 'peixes'?",
    answers: ["Cardume", "Alcateia", "Rebanho", "Bando"],
    correct: 0,
    explanation: "Cardume é o coletivo de peixes."
  },
  {
    question: "Qual é o coletivo de 'lobos'?",
    answers: ["Cardume", "Alcateia", "Manada", "Ninhada"],
    correct: 1,
    explanation: "Alcateia é o coletivo de lobos."
  },
  {
    question: "Qual dessas palavras tem dígrafo?",
    answers: ["Chuva", "Casa", "Mesa", "Pato"],
    correct: 0,
    explanation: "'Ch' é um dígrafo."
  },
  {
    question: "Qual dessas palavras possui hiato?",
    answers: ["Saída", "Prato", "Blusa", "Clube"],
    correct: 0,
    explanation: "Sa-í-da tem hiato."
  },
  {
    question: "Qual dessas palavras possui ditongo?",
    answers: ["Pai", "Saída", "País", "Raiz"],
    correct: 0,
    explanation: "Pai possui ditongo."
  },

  {
    question: "Qual dessas frases está no passado?",
    answers: [
      "Eu comerei amanhã",
      "Eu como agora",
      "Eu comi ontem",
      "Eu comerei hoje"
    ],
    correct: 2,
    explanation: "'Comi' indica ação passada."
  },
  {
    question: "Qual dessas frases está no futuro?",
    answers: [
      "Eu comi",
      "Eu comerei",
      "Eu como",
      "Eu comia"
    ],
    correct: 1,
    explanation: "'Comerei' indica futuro."
  },

  {
    question: "Qual dessas palavras é um substantivo próprio?",
    answers: ["cidade", "menino", "Brasil", "cachorro"],
    correct: 2,
    explanation: "'Brasil' é nome próprio."
  },

  {
    question: "Qual dessas palavras é um substantivo comum?",
    answers: ["Brasil", "João", "Cidade", "Maria"],
    correct: 2,
    explanation: "'Cidade' é substantivo comum."
  },

  {
    question: "Qual dessas palavras está grafada corretamente?",
    answers: ["Geito", "Jeito", "Jeyto", "Jeitoh"],
    correct: 1,
    explanation: "A forma correta é 'jeito'."
  },

  {
    question: "Qual dessas palavras está correta?",
    answers: ["Atraz", "Atrás", "Atras", "Atrass"],
    correct: 1,
    explanation: "'Atrás' leva acento."
  },

  {
    question: "Qual dessas palavras é um verbo?",
    answers: ["Estudar", "Livro", "Azul", "Mesa"],
    correct: 0,
    explanation: "'Estudar' indica ação."
  },

  {
    question: "Qual dessas palavras é um adjetivo?",
    answers: ["Feliz", "Correr", "Mesa", "Casa"],
    correct: 0,
    explanation: "'Feliz' caracteriza algo."
  },

  {
    question: "Qual dessas palavras é um substantivo?",
    answers: ["Amor", "Correr", "Bonito", "Rapidamente"],
    correct: 0,
    explanation: "'Amor' é substantivo."
  },

  {
    question: "Qual dessas palavras possui acento?",
    answers: ["Avó", "Avo", "Avvo", "Avoo"],
    correct: 0,
    explanation: "'Avó' possui acento."
  },

  {
    question: "Qual é o plural de 'papel'?",
    answers: ["Papeis", "Papéis", "Papels", "Papeles"],
    correct: 1,
    explanation: "O plural correto é papéis."
  },

  {
    question: "Qual dessas palavras está correta?",
    answers: ["Enxergar", "Inxergar", "Enxergarr", "Inchergar"],
    correct: 0,
    explanation: "A forma correta é 'enxergar'."
  },

  {
    question: "Qual dessas palavras está correta?",
    answers: ["Hontem", "Ontem", "Onte", "Ontemm"],
    correct: 1,
    explanation: "A forma correta é 'ontem'."
  },

  {
    question: "Qual dessas palavras tem acento?",
    answers: ["Voce", "Você", "Voçê", "Vose"],
    correct: 1,
    explanation: "'Você' tem acento circunflexo."
  },

  {
    question: "Qual dessas palavras está correta?",
    answers: ["Porque", "Porquê", "Por que", "Todas podem estar corretas dependendo da frase"],
    correct: 3,
    explanation: "Cada forma tem uso diferente."
  },

  {
    question: "Qual dessas palavras está correta?",
    answers: ["A gente vamos", "A gente vai", "A gente iremos", "A gente fomos"],
    correct: 1,
    explanation: "'A gente' exige verbo no singular."
  },

  {
    question: "Qual dessas palavras é um pronome?",
    answers: ["Eles", "Casa", "Azul", "Correr"],
    correct: 0,
    explanation: "'Eles' é pronome."
  },

  {
    question: "Qual dessas palavras é uma preposição?",
    answers: ["Com", "Casa", "Correr", "Azul"],
    correct: 0,
    explanation: "'Com' é preposição."
  },

  {
    question: "Qual dessas palavras é uma conjunção?",
    answers: ["Mas", "Mesa", "Azul", "Correr"],
    correct: 0,
    explanation: "'Mas' liga ideias."
  },

  {
    question: "Qual dessas palavras é um advérbio?",
    answers: ["Aqui", "Casa", "Livro", "Mesa"],
    correct: 0,
    explanation: "'Aqui' indica lugar."
  },

  {
    question: "Qual dessas palavras é um adjetivo?",
    answers: ["Grande", "Mesa", "Correr", "Livro"],
    correct: 0,
    explanation: "'Grande' caracteriza algo."
  },

  {
    question: "Qual dessas palavras é um substantivo?",
    answers: ["Cachorro", "Correr", "Bonito", "Rapidamente"],
    correct: 0,
    explanation: "'Cachorro' é substantivo."
  },

  {
    question: "Qual dessas palavras é um verbo?",
    answers: ["Dormir", "Mesa", "Azul", "Casa"],
    correct: 0,
    explanation: "'Dormir' é verbo."
  },
  {
    question: "Em que ano o Brasil declarou sua independência?",
    answers: ["1500", "1822", "1889", "1808"],
    correct: 1,
    explanation: "A independência do Brasil foi proclamada em 1822 por Dom Pedro I."
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    answers: ["Deodoro da Fonseca", "Getúlio Vargas", "Dom Pedro II", "Floriano Peixoto"],
    correct: 0,
    explanation: "Deodoro da Fonseca foi o primeiro presidente após a Proclamação da República."
  },
  {
    question: "Em que ano ocorreu a Proclamação da República no Brasil?",
    answers: ["1822", "1889", "1500", "1930"],
    correct: 1,
    explanation: "A República foi proclamada em 15 de novembro de 1889."
  },
  {
    question: "Quem descobriu o Brasil segundo a história tradicional?",
    answers: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Fernão de Magalhães"],
    correct: 1,
    explanation: "Pedro Álvares Cabral chegou ao Brasil em 1500."
  },
  {
    question: "Qual civilização construiu as pirâmides de Gizé?",
    answers: ["Romanos", "Egípcios", "Gregos", "Maias"],
    correct: 1,
    explanation: "As pirâmides foram construídas no Antigo Egito."
  },
  {
    question: "Quem foi Napoleão Bonaparte?",
    answers: ["Imperador francês", "Rei inglês", "Imperador romano", "General espanhol"],
    correct: 0,
    explanation: "Napoleão foi um líder militar e imperador da França."
  },
  {
    question: "Em que ano começou a Primeira Guerra Mundial?",
    answers: ["1914", "1918", "1939", "1905"],
    correct: 0,
    explanation: "A Primeira Guerra Mundial começou em 1914."
  },
  {
    question: "Em que ano terminou a Primeira Guerra Mundial?",
    answers: ["1916", "1918", "1920", "1930"],
    correct: 1,
    explanation: "A guerra terminou em 1918."
  },
  {
    question: "Em que ano começou a Segunda Guerra Mundial?",
    answers: ["1914", "1929", "1939", "1945"],
    correct: 2,
    explanation: "A Segunda Guerra Mundial começou em 1939."
  },
  {
    question: "Em que ano terminou a Segunda Guerra Mundial?",
    answers: ["1943", "1945", "1947", "1950"],
    correct: 1,
    explanation: "A guerra terminou em 1945."
  },

  {
    question: "Quem foi o líder da Alemanha nazista?",
    answers: ["Hitler", "Stalin", "Churchill", "Roosevelt"],
    correct: 0,
    explanation: "Adolf Hitler liderou a Alemanha nazista."
  },
  {
    question: "Quem foi o líder da União Soviética durante a Segunda Guerra Mundial?",
    answers: ["Lenin", "Stalin", "Trotsky", "Gorbachev"],
    correct: 1,
    explanation: "Joseph Stalin governava a União Soviética."
  },
  {
    question: "Qual evento marcou o início da Segunda Guerra Mundial?",
    answers: [
      "Ataque a Pearl Harbor",
      "Invasão da Polônia",
      "Queda da França",
      "Tratado de Versalhes"
    ],
    correct: 1,
    explanation: "A Alemanha invadiu a Polônia em 1939."
  },

  {
    question: "Quem foi Dom Pedro I?",
    answers: [
      "Imperador do Brasil",
      "Presidente do Brasil",
      "Rei de Portugal",
      "Governador da Bahia"
    ],
    correct: 0,
    explanation: "Dom Pedro I foi o primeiro imperador do Brasil."
  },

  {
    question: "Quem foi Dom Pedro II?",
    answers: [
      "Segundo imperador do Brasil",
      "Primeiro presidente",
      "Rei da Espanha",
      "General brasileiro"
    ],
    correct: 0,
    explanation: "Dom Pedro II governou o Brasil até 1889."
  },

  {
    question: "Qual foi o período em que o Brasil foi governado por imperadores?",
    answers: [
      "República",
      "Império",
      "Colônia",
      "Ditadura"
    ],
    correct: 1,
    explanation: "O período imperial ocorreu entre 1822 e 1889."
  },

  {
    question: "Qual civilização construiu o Coliseu?",
    answers: ["Gregos", "Romanos", "Egípcios", "Persas"],
    correct: 1,
    explanation: "O Coliseu foi construído pelos romanos."
  },

  {
    question: "Quem foi Júlio César?",
    answers: [
      "Imperador romano",
      "General e líder romano",
      "Filósofo grego",
      "Rei egípcio"
    ],
    correct: 1,
    explanation: "Júlio César foi um famoso líder romano."
  },

  {
    question: "Qual civilização criou a democracia?",
    answers: ["Egípcios", "Gregos", "Romanos", "Persas"],
    correct: 1,
    explanation: "A democracia surgiu na Grécia Antiga."
  },

  {
    question: "Quem foi Alexandre, o Grande?",
    answers: [
      "Rei da Macedônia",
      "Imperador romano",
      "Rei egípcio",
      "General persa"
    ],
    correct: 0,
    explanation: "Alexandre foi rei da Macedônia e conquistador."
  },

  {
    question: "Qual era o nome do império governado por Roma?",
    answers: [
      "Império Grego",
      "Império Romano",
      "Império Persa",
      "Império Bizantino"
    ],
    correct: 1,
    explanation: "Roma dominou grande parte da Europa."
  },

  {
    question: "Quem foi Cristóvão Colombo?",
    answers: [
      "Navegador que chegou à América em 1492",
      "Rei da Espanha",
      "Imperador romano",
      "Explorador africano"
    ],
    correct: 0,
    explanation: "Colombo chegou à América em 1492."
  },

  {
    question: "Qual povo construiu Machu Picchu?",
    answers: ["Maias", "Astecas", "Incas", "Olmecas"],
    correct: 2,
    explanation: "Machu Picchu foi construída pelos incas."
  },

  {
    question: "Qual civilização vivia no México antes dos espanhóis?",
    answers: ["Incas", "Astecas", "Egípcios", "Romanos"],
    correct: 1,
    explanation: "Os astecas dominavam grande parte do México."
  },

  {
    question: "Quem liderou a independência da Índia?",
    answers: [
      "Mahatma Gandhi",
      "Nelson Mandela",
      "Karl Marx",
      "Napoleão"
    ],
    correct: 0,
    explanation: "Gandhi liderou movimentos pacíficos."
  },

  {
    question: "Quem foi Nelson Mandela?",
    answers: [
      "Presidente da África do Sul",
      "Rei africano",
      "Imperador romano",
      "General britânico"
    ],
    correct: 0,
    explanation: "Mandela lutou contra o apartheid."
  },

  {
    question: "Qual evento derrubou a monarquia francesa?",
    answers: [
      "Revolução Francesa",
      "Revolução Industrial",
      "Guerra Fria",
      "Primeira Guerra"
    ],
    correct: 0,
    explanation: "A Revolução Francesa começou em 1789."
  },

  {
    question: "Quem foi o rei da França durante a Revolução Francesa?",
    answers: ["Luís XVI", "Napoleão", "Carlos Magno", "Luís XIV"],
    correct: 0,
    explanation: "Luís XVI foi executado durante a revolução."
  },

  {
    question: "Qual evento ocorreu em 1789?",
    answers: [
      "Revolução Francesa",
      "Independência do Brasil",
      "Primeira Guerra",
      "Descobrimento do Brasil"
    ],
    correct: 0,
    explanation: "1789 marcou o início da Revolução Francesa."
  },

  {
    question: "Qual país colonizou o Brasil?",
    answers: ["Espanha", "Portugal", "França", "Inglaterra"],
    correct: 1,
    explanation: "O Brasil foi colônia de Portugal."
  },

  {
    question: "Qual produto foi muito explorado no início da colonização do Brasil?",
    answers: ["Pau-brasil", "Café", "Ouro", "Algodão"],
    correct: 0,
    explanation: "O pau-brasil deu nome ao país."
  },

  {
    question: "Qual ciclo econômico veio depois do pau-brasil?",
    answers: ["Ciclo do açúcar", "Ciclo do café", "Ciclo do ouro", "Ciclo da borracha"],
    correct: 0,
    explanation: "O açúcar foi muito importante no período colonial."
  },

  {
    question: "Onde foi encontrada grande quantidade de ouro no Brasil colonial?",
    answers: ["Minas Gerais", "Bahia", "São Paulo", "Rio Grande do Sul"],
    correct: 0,
    explanation: "Minas Gerais teve o ciclo do ouro."
  },

  {
    question: "Quem foi Tiradentes?",
    answers: [
      "Líder da Inconfidência Mineira",
      "Imperador do Brasil",
      "General português",
      "Rei brasileiro"
    ],
    correct: 0,
    explanation: "Tiradentes participou da Inconfidência Mineira."
  },

  {
    question: "Em que ano ocorreu a Inconfidência Mineira?",
    answers: ["1789", "1822", "1889", "1500"],
    correct: 0,
    explanation: "A conspiração ocorreu em 1789."
  },
  {
    question: "Qual é o maior continente do mundo?",
    answers: ["África", "Ásia", "Europa", "América"],
    correct: 1,
    explanation: "A Ásia é o maior continente do planeta."
  },
  {
    question: "Qual é o maior oceano do mundo?",
    answers: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correct: 3,
    explanation: "O Oceano Pacífico é o maior da Terra."
  },
  {
    question: "Qual é o país com maior território do mundo?",
    answers: ["China", "Estados Unidos", "Rússia", "Canadá"],
    correct: 2,
    explanation: "A Rússia é o maior país do mundo em área territorial."
  },
  {
    question: "Qual é o maior rio do mundo em volume de água?",
    answers: ["Rio Nilo", "Rio Amazonas", "Rio Mississipi", "Rio Yangtzé"],
    correct: 1,
    explanation: "O Rio Amazonas possui o maior volume de água do planeta."
  },
  {
    question: "Qual é o deserto mais quente do mundo?",
    answers: ["Saara", "Atacama", "Gobi", "Kalahari"],
    correct: 0,
    explanation: "O Saara é o maior deserto quente do mundo."
  },
  {
    question: "Qual é a capital do Brasil?",
    answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correct: 1,
    explanation: "Brasília é a capital do Brasil desde 1960."
  },
  {
    question: "Qual é o maior país da América do Sul?",
    answers: ["Argentina", "Brasil", "Peru", "Colômbia"],
    correct: 1,
    explanation: "O Brasil é o maior país da América do Sul."
  },
  {
    question: "Qual é o rio mais longo do mundo segundo muitos estudos?",
    answers: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
    correct: 1,
    explanation: "O Rio Nilo é considerado por muitos o mais longo do mundo."
  },
  {
    question: "Qual é o ponto mais alto da Terra?",
    answers: ["Monte Everest", "Monte Kilimanjaro", "Monte Fuji", "Monte Aconcágua"],
    correct: 0,
    explanation: "O Monte Everest é o ponto mais alto do planeta."
  },
  {
    question: "Qual continente fica o Brasil?",
    answers: ["América do Norte", "Europa", "América do Sul", "África"],
    correct: 2,
    explanation: "O Brasil fica na América do Sul."
  },

  {
    question: "Qual é o menor continente do mundo?",
    answers: ["Europa", "Antártida", "Oceania", "África"],
    correct: 2,
    explanation: "A Oceania é o menor continente."
  },
  {
    question: "Qual é o maior país da África?",
    answers: ["Nigéria", "Egito", "Argélia", "África do Sul"],
    correct: 2,
    explanation: "A Argélia é o maior país africano."
  },
  {
    question: "Qual é a capital da Argentina?",
    answers: ["Santiago", "Buenos Aires", "Montevidéu", "Lima"],
    correct: 1,
    explanation: "Buenos Aires é a capital da Argentina."
  },
  {
    question: "Qual é o maior lago do mundo?",
    answers: ["Lago Vitória", "Lago Superior", "Mar Cáspio", "Lago Baikal"],
    correct: 2,
    explanation: "O Mar Cáspio é o maior lago do mundo."
  },
  {
    question: "Qual país tem mais população no mundo?",
    answers: ["Índia", "China", "Estados Unidos", "Indonésia"],
    correct: 0,
    explanation: "A Índia ultrapassou a China em população."
  },

  {
    question: "Qual é o maior estado do Brasil em área?",
    answers: ["Amazonas", "Pará", "Mato Grosso", "Bahia"],
    correct: 0,
    explanation: "O Amazonas é o maior estado brasileiro."
  },
  {
    question: "Qual é o menor estado do Brasil?",
    answers: ["Sergipe", "Alagoas", "Rio de Janeiro", "Espírito Santo"],
    correct: 0,
    explanation: "Sergipe é o menor estado do Brasil."
  },
  {
    question: "Qual é o clima predominante na Amazônia?",
    answers: ["Desértico", "Polar", "Equatorial", "Mediterrâneo"],
    correct: 2,
    explanation: "O clima equatorial é quente e úmido."
  },
  {
    question: "Qual é o maior bioma do Brasil?",
    answers: ["Cerrado", "Amazônia", "Caatinga", "Pampa"],
    correct: 1,
    explanation: "A Amazônia é o maior bioma brasileiro."
  },
  {
    question: "Qual é o bioma típico do Nordeste brasileiro?",
    answers: ["Caatinga", "Amazônia", "Pantanal", "Pampa"],
    correct: 0,
    explanation: "A Caatinga é característica do Nordeste."
  },

  {
    question: "Qual é o maior arquipélago do Brasil?",
    answers: ["Fernando de Noronha", "Marajó", "Ilhabela", "Trindade"],
    correct: 0,
    explanation: "Fernando de Noronha é o arquipélago mais famoso do Brasil."
  },
  {
    question: "Qual é o maior delta fluvial do mundo?",
    answers: ["Delta do Nilo", "Delta do Ganges", "Delta do Amazonas", "Delta do Mekong"],
    correct: 1,
    explanation: "O delta do Ganges-Brahmaputra é enorme."
  },
  {
    question: "Qual é o país mais populoso da América?",
    answers: ["Brasil", "Estados Unidos", "México", "Canadá"],
    correct: 1,
    explanation: "Os Estados Unidos têm a maior população das Américas."
  },
  {
    question: "Qual é o maior deserto frio do mundo?",
    answers: ["Antártida", "Saara", "Gobi", "Atacama"],
    correct: 0,
    explanation: "A Antártida é um deserto polar."
  },
  {
    question: "Qual é o país mais longo do mundo em extensão?",
    answers: ["Chile", "Brasil", "Argentina", "Canadá"],
    correct: 0,
    explanation: "O Chile tem formato muito longo e estreito."
  },

  {
    question: "Qual é o maior planalto do Brasil?",
    answers: ["Planalto Central", "Planalto Atlântico", "Planalto Meridional", "Planalto Amazônico"],
    correct: 0,
    explanation: "O Planalto Central ocupa grande parte do território."
  },
  {
    question: "Qual oceano banha o Brasil?",
    answers: ["Índico", "Atlântico", "Pacífico", "Ártico"],
    correct: 1,
    explanation: "O Brasil é banhado pelo Oceano Atlântico."
  },
  {
    question: "Qual é a maior floresta tropical do mundo?",
    answers: ["Floresta do Congo", "Floresta Amazônica", "Floresta Boreal", "Taiga"],
    correct: 1,
    explanation: "A Amazônia é a maior floresta tropical."
  },
  {
    question: "Qual país possui o maior número de fusos horários?",
    answers: ["Rússia", "Estados Unidos", "França", "China"],
    correct: 2,
    explanation: "A França possui territórios espalhados pelo mundo."
  },
  {
    question: "Qual linha divide a Terra em hemisfério norte e sul?",
    answers: ["Trópico de Câncer", "Equador", "Meridiano de Greenwich", "Trópico de Capricórnio"],
    correct: 1,
    explanation: "A linha do Equador divide o planeta."
  },

  {
    question: "Qual linha divide o planeta em leste e oeste?",
    answers: ["Equador", "Greenwich", "Trópico de Câncer", "Trópico de Capricórnio"],
    correct: 1,
    explanation: "O meridiano de Greenwich divide leste e oeste."
  },
  {
    question: "Qual é o maior país da América do Norte?",
    answers: ["Estados Unidos", "México", "Canadá", "Groenlândia"],
    correct: 2,
    explanation: "O Canadá é o maior da América do Norte."
  },
  {
    question: "Qual é a capital da França?",
    answers: ["Londres", "Paris", "Roma", "Berlim"],
    correct: 1,
    explanation: "Paris é a capital francesa."
  },
  {
    question: "Qual é o maior país da Europa?",
    answers: ["Alemanha", "França", "Rússia", "Espanha"],
    correct: 2,
    explanation: "A Rússia é o maior país da Europa e Ásia."
  },
  {
    question: "Qual é o maior golfo do mundo?",
    answers: ["Golfo do México", "Golfo Pérsico", "Golfo da Guiné", "Golfo de Bengala"],
    correct: 0,
    explanation: "O Golfo do México é o maior."
  },

  {
    question: "Qual é o maior arquipélago do mundo?",
    answers: ["Filipinas", "Japão", "Indonésia", "Maldivas"],
    correct: 2,
    explanation: "A Indonésia possui milhares de ilhas."
  },
  {
    question: "Qual país tem maior área na América do Sul depois do Brasil?",
    answers: ["Argentina", "Peru", "Colômbia", "Bolívia"],
    correct: 0,
    explanation: "A Argentina é o segundo maior."
  },
  {
    question: "Qual é o mar entre a Europa e a África?",
    answers: ["Mar Negro", "Mar Mediterrâneo", "Mar Vermelho", "Mar Cáspio"],
    correct: 1,
    explanation: "O Mediterrâneo separa Europa e África."
  },
  {
    question: "Qual país fica na Península Ibérica?",
    answers: ["Itália", "Portugal", "França", "Alemanha"],
    correct: 1,
    explanation: "Portugal e Espanha ficam na Península Ibérica."
  },
  {
    question: "Qual é o maior país da África em população?",
    answers: ["Nigéria", "Egito", "África do Sul", "Etiópia"],
    correct: 0,
    explanation: "A Nigéria tem a maior população da África."
  },

  {
    question: "Qual é o maior lago de água doce do mundo?",
    answers: ["Baikal", "Superior", "Vitória", "Tanganica"],
    correct: 1,
    explanation: "O Lago Superior é o maior em área."
  },
  {
    question: "Qual é o maior arquipélago brasileiro?",
    answers: ["Fernando de Noronha", "Marajó", "Abrolhos", "Trindade"],
    correct: 0,
    explanation: "Fernando de Noronha é famoso e grande."
  },
  {
    question: "Qual é a capital do Japão?",
    answers: ["Pequim", "Seul", "Tóquio", "Bangkok"],
    correct: 2,
    explanation: "Tóquio é a capital japonesa."
  },
  {
    question: "Qual é o maior vulcão ativo da Europa?",
    answers: ["Etna", "Vesúvio", "Stromboli", "Teide"],
    correct: 0,
    explanation: "O Etna fica na Itália."
  },
  {
    question: "Qual é o país com maior número de ilhas?",
    answers: ["Noruega", "Suécia", "Indonésia", "Filipinas"],
    correct: 3,
    explanation: "As Filipinas possuem mais de 7 mil ilhas."
  },
  {
    question: "Qual é o maior rio da Europa?",
    answers: ["Danúbio", "Volga", "Reno", "Tâmisa"],
    correct: 1,
    explanation: "O Volga é o maior rio europeu."
  },
  {
    question: "Qual força puxa os objetos em direção ao centro da Terra?",
    answers: ["Magnetismo", "Gravidade", "Atrito", "Pressão"],
    correct: 1,
    explanation: "A gravidade é a força que atrai objetos para o centro da Terra."
  },
  {
    question: "Qual unidade mede a velocidade?",
    answers: ["Metro", "Metro por segundo", "Quilograma", "Litro"],
    correct: 1,
    explanation: "A velocidade normalmente é medida em metros por segundo (m/s)."
  },
  {
    question: "O que acontece com a água quando atinge 100°C ao nível do mar?",
    answers: ["Congela", "Evapora", "Condensa", "Solidifica"],
    correct: 1,
    explanation: "A água entra em ebulição e evapora a 100°C ao nível do mar."
  },
  {
    question: "Qual partícula tem carga negativa?",
    answers: ["Próton", "Nêutron", "Elétron", "Íon"],
    correct: 2,
    explanation: "O elétron possui carga elétrica negativa."
  },
  {
    question: "Qual é a principal fonte de energia da Terra?",
    answers: ["Lua", "Sol", "Vento", "Núcleo da Terra"],
    correct: 1,
    explanation: "O Sol fornece luz e calor que sustentam a vida na Terra."
  },
  {
    question: "Qual estado da matéria tem forma e volume definidos?",
    answers: ["Gasoso", "Líquido", "Plasma", "Sólido"],
    correct: 3,
    explanation: "Os sólidos possuem forma e volume definidos."
  },
  {
    question: "Qual instrumento mede a temperatura?",
    answers: ["Barômetro", "Termômetro", "Anemômetro", "Higrômetro"],
    correct: 1,
    explanation: "O termômetro é usado para medir temperatura."
  },
  {
    question: "O aumento da velocidade de um objeto é chamado de:",
    answers: ["Pressão", "Aceleração", "Gravidade", "Energia"],
    correct: 1,
    explanation: "A aceleração é a variação da velocidade ao longo do tempo."
  },
  {
    question: "Qual gás é essencial para a respiração humana?",
    answers: ["Nitrogênio", "Oxigênio", "Hidrogênio", "Hélio"],
    correct: 1,
    explanation: "O oxigênio é usado pelas células para produzir energia."
  },
  {
    question: "Qual planeta tem a gravidade mais parecida com a da Terra?",
    answers: ["Marte", "Vênus", "Mercúrio", "Netuno"],
    correct: 1,
    explanation: "Vênus possui gravidade semelhante à da Terra."
  },

  {
    question: "O que mede a força do vento?",
    answers: ["Termômetro", "Barômetro", "Anemômetro", "Higrômetro"],
    correct: 2,
    explanation: "O anemômetro mede a velocidade do vento."
  },
  {
    question: "Qual transformação muda líquido para gás?",
    answers: ["Condensação", "Evaporação", "Solidificação", "Fusão"],
    correct: 1,
    explanation: "Evaporação é quando um líquido passa para o estado gasoso."
  },
  {
    question: "Qual é o gás mais abundante na atmosfera?",
    answers: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hélio"],
    correct: 1,
    explanation: "O nitrogênio representa cerca de 78% da atmosfera."
  },
  {
    question: "A energia do movimento é chamada de:",
    answers: ["Energia térmica", "Energia cinética", "Energia elétrica", "Energia química"],
    correct: 1,
    explanation: "Energia cinética é a energia associada ao movimento."
  },
  {
    question: "Qual planeta é o maior do Sistema Solar?",
    answers: ["Terra", "Saturno", "Júpiter", "Urano"],
    correct: 2,
    explanation: "Júpiter é o maior planeta do Sistema Solar."
  },
  {
    question: "Quando dois objetos esfregam entre si surge:",
    answers: ["Gravidade", "Atrito", "Pressão", "Energia nuclear"],
    correct: 1,
    explanation: "O atrito ocorre quando superfícies entram em contato."
  },
  {
    question: "Qual estado da matéria não tem forma nem volume fixo?",
    answers: ["Sólido", "Líquido", "Gasoso", "Cristal"],
    correct: 2,
    explanation: "Os gases ocupam todo o espaço disponível."
  },
  {
    question: "Qual fenômeno separa a luz branca em várias cores?",
    answers: ["Reflexão", "Refração", "Dispersão", "Absorção"],
    correct: 2,
    explanation: "A dispersão ocorre quando a luz se separa em várias cores."
  },
  {
    question: "Qual metal é líquido à temperatura ambiente?",
    answers: ["Ferro", "Mercúrio", "Cobre", "Alumínio"],
    correct: 1,
    explanation: "O mercúrio é um metal líquido à temperatura ambiente."
  },
  {
    question: "Qual camada da Terra é a mais externa?",
    answers: ["Núcleo", "Manto", "Crosta", "Atmosfera"],
    correct: 2,
    explanation: "A crosta é a camada superficial da Terra."
  },

  {
    question: "O som se propaga melhor em:",
    answers: ["Vácuo", "Sólidos", "Nada", "Espaço vazio"],
    correct: 1,
    explanation: "O som se propaga melhor em sólidos porque as partículas estão mais próximas."
  },
  {
    question: "Qual força mantém os planetas em órbita?",
    answers: ["Elétrica", "Magnética", "Gravitacional", "Nuclear"],
    correct: 2,
    explanation: "A gravidade mantém os planetas orbitando o Sol."
  },
  {
    question: "Qual gás é usado pelas plantas na fotossíntese?",
    answers: ["Oxigênio", "Dióxido de carbono", "Hélio", "Nitrogênio"],
    correct: 1,
    explanation: "As plantas utilizam dióxido de carbono na fotossíntese."
  },
  {
    question: "Qual instrumento mede pressão atmosférica?",
    answers: ["Barômetro", "Termômetro", "Régua", "Anemômetro"],
    correct: 0,
    explanation: "O barômetro mede a pressão do ar."
  },
  {
    question: "A mudança de sólido para líquido é chamada:",
    answers: ["Fusão", "Condensação", "Evaporação", "Sublimação"],
    correct: 0,
    explanation: "Fusão ocorre quando um sólido se transforma em líquido."
  },
  {
    question: "Qual é a estrela mais próxima da Terra?",
    answers: ["Sirius", "Sol", "Alpha Centauri", "Betelgeuse"],
    correct: 1,
    explanation: "O Sol é a estrela mais próxima da Terra."
  },
  {
    question: "A luz viaja mais rápido em:",
    answers: ["Água", "Ar", "Vidro", "Vácuo"],
    correct: 3,
    explanation: "A velocidade máxima da luz ocorre no vácuo."
  },
  {
    question: "Qual processo transforma vapor em líquido?",
    answers: ["Condensação", "Fusão", "Sublimação", "Evaporação"],
    correct: 0,
    explanation: "Condensação ocorre quando um gás vira líquido."
  },
  {
    question: "Qual parte da célula contém o DNA?",
    answers: ["Membrana", "Núcleo", "Citoplasma", "Ribossomo"],
    correct: 1,
    explanation: "O núcleo celular armazena o material genético."
  },
  {
    question: "Qual tipo de energia está armazenada nos alimentos?",
    answers: ["Térmica", "Química", "Sonora", "Elétrica"],
    correct: 1,
    explanation: "Os alimentos armazenam energia química."
  },

  {
    question: "Qual planeta é conhecido pelos seus anéis?",
    answers: ["Marte", "Saturno", "Vênus", "Mercúrio"],
    correct: 1,
    explanation: "Saturno é famoso por seu sistema de anéis."
  },
  {
    question: "A força aplicada em uma área gera:",
    answers: ["Energia", "Pressão", "Luz", "Calor"],
    correct: 1,
    explanation: "Pressão é a força dividida pela área."
  },
  {
    question: "Qual órgão bombeia sangue no corpo?",
    answers: ["Pulmão", "Cérebro", "Coração", "Fígado"],
    correct: 2,
    explanation: "O coração bombeia sangue pelo corpo."
  },
  {
    question: "Qual processo produz energia no Sol?",
    answers: ["Combustão", "Fusão nuclear", "Fissão", "Eletricidade"],
    correct: 1,
    explanation: "O Sol gera energia através da fusão nuclear."
  },
  {
    question: "Qual gás ajuda a proteger a Terra da radiação solar?",
    answers: ["Ozônio", "Oxigênio", "Nitrogênio", "Argônio"],
    correct: 0,
    explanation: "A camada de ozônio bloqueia parte da radiação ultravioleta."
  },
  {
    question: "Qual é a unidade de energia no sistema internacional?",
    answers: ["Watt", "Joule", "Newton", "Volt"],
    correct: 1,
    explanation: "O joule é a unidade de energia no SI."
  },
  {
    question: "A força que impede um objeto de continuar se movendo é:",
    answers: ["Atrito", "Gravidade", "Magnetismo", "Impulso"],
    correct: 0,
    explanation: "O atrito reduz o movimento entre superfícies."
  },
  {
    question: "Qual órgão controla o sistema nervoso?",
    answers: ["Coração", "Pulmão", "Cérebro", "Estômago"],
    correct: 2,
    explanation: "O cérebro coordena as funções do corpo."
  },
  {
    question: "Qual parte da planta faz fotossíntese?",
    answers: ["Raiz", "Caule", "Folha", "Semente"],
    correct: 2,
    explanation: "As folhas captam luz e realizam fotossíntese."
  },
  {
    question: "Qual fenômeno faz objetos flutuarem na água?",
    answers: ["Gravidade", "Empuxo", "Atrito", "Pressão"],
    correct: 1,
    explanation: "O empuxo é a força que empurra objetos para cima em um líquido."
  },

  {
    question: "Qual gás é liberado na respiração?",
    answers: ["Oxigênio", "Hélio", "Dióxido de carbono", "Hidrogênio"],
    correct: 2,
    explanation: "O corpo libera dióxido de carbono ao respirar."
  },
  {
    question: "Qual forma de energia vem do movimento da água?",
    answers: ["Solar", "Eólica", "Hidrelétrica", "Nuclear"],
    correct: 2,
    explanation: "A energia hidrelétrica vem da força da água."
  },
  {
    question: "Qual órgão filtra o sangue no corpo humano?",
    answers: ["Pulmão", "Rim", "Coração", "Estômago"],
    correct: 1,
    explanation: "Os rins filtram resíduos do sangue."
  },
  {
    question: "Qual tipo de lente é usada em lupa?",
    answers: ["Côncava", "Convexa", "Plana", "Prismática"],
    correct: 1,
    explanation: "Lupas usam lentes convexas para ampliar imagens."
  },
  {
    question: "Qual camada da atmosfera onde vivemos?",
    answers: ["Estratosfera", "Mesosfera", "Troposfera", "Termosfera"],
    correct: 2,
    explanation: "A troposfera é a camada mais próxima da superfície."
  },
  {
    question: "Qual fenômeno natural produz eletricidade nas nuvens?",
    answers: ["Vento", "Raio", "Arco-íris", "Neve"],
    correct: 1,
    explanation: "Os raios são descargas elétricas na atmosfera."
  },
  {
    question: "Qual órgão permite a troca de oxigênio no corpo?",
    answers: ["Coração", "Pulmões", "Fígado", "Pâncreas"],
    correct: 1,
    explanation: "Os pulmões fazem a troca de gases com o sangue."
  },
  {
    question: "Qual tipo de energia vem do calor interno da Terra?",
    answers: ["Geotérmica", "Solar", "Eólica", "Química"],
    correct: 0,
    explanation: "Energia geotérmica vem do calor do interior da Terra."
  },
  {
    question: "Qual fenômeno causa as marés?",
    answers: ["Vento", "Lua", "Sol", "Chuvas"],
    correct: 1,
    explanation: "A gravidade da Lua influencia as marés."
  },
  {
    question: "Qual planeta é chamado de planeta azul?",
    answers: ["Marte", "Terra", "Netuno", "Urano"],
    correct: 1,
    explanation: "A Terra é chamada de planeta azul por causa dos oceanos."
  }
];

