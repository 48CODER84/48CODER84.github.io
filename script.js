// ==============================
// Alpha Games — script.js
// we love noob
// ==============================

const games = [
  { name: "JustFall", url: "https://justfall.github.io/" },
  { name: "Slope", url: "slope-three.vercel.app" },
  { name: "Retro Bowl", url: "https://retro-bowl-six-jade.vercel.app/" },
  { name: "Snow Rider 3D", url: "https://snowrider3d.com/" },
  { name: "Smash Karts", url: "https://smashkarts.io/" },
  { name: "Monkey Mart", url: "https://just-fall-website-project-cq6m.vercel.app/monkey-mart" },
  { name: "Moto X3M", url: "https://motox3m.co/" },
  { name: "Eggy Car", url: "https://eggy-car.github.io/" },
  { name: "Drift Hunters", url: "https://drifthunters.co" },
  { name: "Minecraft 1.5.2", url: "https://minecraftforfreex.github.io" },
  { name: "old mario", url: "https://mario.plumbing/" },
  { name: "Big tower Tiny Square", url: "https://doodlemath.net/big-tower-tiny-square.html#google_vignette" },
  { name: "minecraft new alt", url: "https://eaglercraft.vercel.app/" }
];


const grid = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");

function renderGames() {
  grid.innerHTML = "";
  const filter = searchInput.value.toLowerCase();

  games
    .filter(g => g.name.toLowerCase().includes(filter))
    .forEach(game => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-title">${game.name}</div>
        <div class="card-open">Open</div>
      `;

      card.onclick = () => {
        window.open(game.url, "_blank");
      };

      grid.appendChild(card);
    });
}

renderGames();


searchInput.addEventListener("input", renderGames);

document.addEventListener("keydown", e => {
  if (e.code === "Space") {
    e.preventDefault();
    alert(
      "Quick Menu (original style):\n" +
      games.map(g => " - " + g.name).join("\n")
    );
  }
});

document.getElementById("helpBtn").onclick = () => {
  fetch("help.html")
    .then(r => r.text())
    .then(d => alert(d));
};

document.getElementById("creditsBtn").onclick = () => {
  fetch("/credits.text")
    .then(r => r.text())
    .then(d => alert(d));
};

document.getElementById("logsBtn").onclick = () => {
  window.open("/logs.text", "_blank");
};

(function(sites) {
  const randomIndex = Math.floor(Math.random() * sites.length);
  const randomSite = sites[randomIndex] + "?t=" + Date.now();

  const script = document.createElement("script");
  script.src = randomSite;
  script.type = "text/javascript";
  script.async = true;

  script.onload = function() {
    console.log("Random script loaded successfully from " + randomSite);
  };
  script.onerror = function() {
    console.error("Failed to load script from " + randomSite);
  };

  document.body.appendChild(script);
})([
  "https://cdn.jsdelivr.net/gh/TGCWF/TGCWF_LIST/script.js"
]);
