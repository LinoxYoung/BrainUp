// ===== ÁUDIOS =====
const soundtrack = new Audio("assets/sounds/soundtrack.mp3");
const clickSound = new Audio("assets/sounds/click.mp3");

soundtrack.loop = true;

let questions = [];
let current = 0;
let lives = 3;
let xp = 0;
let streak = 0;

// ===== TELAS =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ===== MENU =====
function goMenu() {
  showScreen("menu");
}

// ===== INICIAR NORMAL =====
function startNormal() {
  questions = shuffle([...allQuestions]).slice(0, 50);
  resetGame();
  showScreen("game");
  loadQuestion();
}

// ===== PERGUNTA DIÁRIA =====
function startDaily() {
  const today = new Date().getDate();
  questions = [allQuestions[today % allQuestions.length]];
  resetGame();
  showScreen("game");
  loadQuestion();
}

// ===== RESET =====
function resetGame() {
  current = 0;
  lives = 3;
  xp = 0;
  streak = 0;

  document.getElementById("xp").innerText = xp;
  document.getElementById("lives").innerText = lives;
  document.getElementById("feedback").innerText = "";
  document.getElementById("explanation").innerText = "";
}

// ===== CARREGAR PERGUNTA =====
function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;

    btn.onclick = () => {
      playClick(); // 👆 click só nas perguntas
      checkAnswer(index);
    };

    answersDiv.appendChild(btn);
  });
}

// ===== VERIFICAR =====
function checkAnswer(index) {
  const q = questions[current];

  if (index === q.correct) {
    xp += 10;
    document.getElementById("feedback").innerText = "Correto! 🔥";
  } else {
    lives--;
    document.getElementById("feedback").innerText = "Errado! ❌";
  }

  document.getElementById("explanation").innerText = q.explanation;

  document.getElementById("xp").innerText = xp;
  document.getElementById("lives").innerText = lives;

  current++;

  if (current >= questions.length || lives <= 0) {
    setTimeout(() => {
      document.getElementById("question").innerText = "Fim de jogo!";
      document.getElementById("answers").innerHTML = "";
    }, 2000);
    return;
  }

  setTimeout(loadQuestion, 2500);
}

// ===== CLICK (APENAS RESPOSTAS) =====
function playClick() {
  if (!soundEnabled) return;

  clickSound.currentTime = 0;
  clickSound.play();
}

// ===== EMBARALHAR =====
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ===== INICIAR APP =====

// Música começa na primeira interação (necessário para celular)
document.body.addEventListener("click", () => {
  if (soundEnabled && soundtrack.paused) {
    soundtrack.play();
  }
}, { once: true });

showScreen("menu");
