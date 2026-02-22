let soundEnabled = localStorage.getItem("sound") !== "off";

const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.getElementById("soundToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

soundToggle.checked = !soundEnabled;

themeToggle.onchange = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};

soundToggle.onchange = () => {
  soundEnabled = !soundToggle.checked;
  localStorage.setItem("sound", soundEnabled ? "on" : "off");

  if (!soundEnabled) soundtrack.pause();
  else soundtrack.play();
};

function openSettings() {
  showScreen("settings");
}