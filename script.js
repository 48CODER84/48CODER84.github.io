
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.fillStyle = "#00ffa6";
        ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* === ALL YOUR ORIGINAL FUNCTIONS (unaltered!) === */

function defaultBrowser(url){
  if (url == "cookieclicker"){
    cookieclicker();
    return 0;
  }
  if (url == "minecraft188"){
    minecraft188();
    return 0;
  }
  let a = window.open("about:blank");
  a.document.write(`
  <html>
    <head>
      <title>Google Doc</title>
      <style>
        html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
        object { width: 100%; height: 100%; border: none; }
      </style>
    </head>
    <body>
      <object data="${url}"></object>
    </body>
  </html>`);
  a.document.close();
}

function cookieclicker(){
  let a = window.open("about:blank");
  fetch("https://thatkidfr.github.io/index.html")
  .then(r => r.text())
  .then(html => {
    let patched = html.replace(
      /<head>/i,
      '<head><base href="https://thatkidfr.github.io/">'
    );
    a.document.open();
    a.document.write(patched);
    a.document.close();
  });
}

function extragames(){
  let a = window.open("about:blank");
  fetch("https://thatkidfr.github.io/passwordwithvercel/index.html")
  .then(r => r.text())
  .then(html => {
    let patched = html.replace(
      /<head>/i,
      '<head><base href="https://thatkidfr.github.io/passwordwithvercel/">'
    );
    a.document.open();
    a.document.write(patched);
    a.document.close();
  });
}

function minecraft188(){
  if (!(localStorage.getItem("hideAlert") === "true")) {
      let showAgain = confirm("If keys don't work, click inside the window before the game loads.\n\nOK = show again\nCancel = hide forever");
      if (!showAgain) localStorage.setItem("hideAlert", "true");
  }
  let a = window.open("about:blank");
  a.document.write(`
  <html>
    <head>
      <title>Google Doc</title>
      <style>
        html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
        object { width: 100%; height: 100%; border: none; }
      </style>
    </head>
    <body>
      <object data="https://eaglercraft-88a.pages.dev/"></object>
    </body>
  </html>`);
  a.document.close();
}

var a=document.createElement("script");
a.src="https://thatkidfr.github.io/jsrunner/js.js";
document.body.appendChild(a);

function credits(){
  let a = window.open("about:blank");
  fetch("https://thatkidfr.github.io/credits/index.html")
  .then(r => r.text())
  .then(html => {
    let patched = html.replace(
      /<head>/i,
      '<head><base href="https://thatkidfr.github.io/credits">'
    );
    a.document.open();
    a.document.write(patched);
    a.document.close();
  });
}

function logs(){
  let a = window.open("about:blank");
  fetch("https://thatkidfr.github.io/logs/index.html")
  .then(r => r.text())
  .then(html => {
    let patched = html.replace(
      /<head>/i,
      '<head><base href="https://thatkidfr.github.io/logs">'
    );
    a.document.open();
    a.document.write(patched);
    a.document.close();
  });
}

function help(){
  alert("Ask in Discord: https://discord.gg/2Mwf5URA OR email robodave699@gmail.com.\nDo NOT use school email.");
}

/* === UI Reveal + Search Bar (visual only) === */
let allowed = 0;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && allowed === 0) {
        allowed = 1;
        event.preventDefault();

        const content = document.getElementById("content");

        const title = document.createElement("h1");
        title.textContent = "Alpha Games";
        content.appendChild(title);

        // Search bar
        const search = document.createElement("input");
        search.id = "searchBar";
        search.placeholder = "Search games...";
        content.appendChild(search);

        const grid = document.createElement("div");
        grid.className = "button-grid";
        content.appendChild(grid);

        function addButton(text, url) {
            const btn = document.createElement("button");
            btn.textContent = text;
            btn.dataset.label = text.toLowerCase();
            btn.onclick = () => defaultBrowser(url);
            grid.appendChild(btn);
        }

        /* === ALL ORIGINAL BUTTONS (unchanged) === */
        addButton("Game Suggestions", "https://docs.google.com/forms/d/e/1FAIpQLSe2tpYcWk9raN6wWIF7qKJilht7aFi6PViRnLt2zfiymXL_ig/viewform?usp=dialog");
        addButton("Cookie Clicker", "cookieclicker");
        addButton("Interstellar Proxy", "https://gointerstellar.app");
        addButton("Minecraft 1.8.8", "minecraft188");
        addButton("Minecraft 1.8.8 (alt)", "https://eaglercraft1-8.github.io");
        addButton("Minecraft 1.12", "https://eaglercrafter112.github.io/eaglercraft/");
        addButton("Crossy Road", "https://azgames.io/game/crossy-road/");
        addButton("FNAF 1", "https://thatkidfr.github.io/FNAF1/");
        addButton("BlackJack", "https://funschoolmath.github.io/BlackJack/index.html");
        addButton("Retro Bowl", "https://funschoolmath.github.io/retrobowl/index.html");
        addButton("Retro Bowl College", "https://db.duck.theducklair.com/html/retro_bowl_college/");
        addButton("2048", "https://funschoolmath.github.io/2048/index.html");
        addButton("Drive Mad", "https://thatkidfr.github.io/drive-mad/");
        addButton("Hollow Knight", "https://thatkidfr.github.io/hollow_knight/");
        addButton("Old Polytrack", "https://thatkidfr.github.io/polytrack/");
        addButton("New Polytrack", "https://app-polytrack.kodub.com/0.5.1/");
        addButton("COD Zombies", "https://db.duck.theducklair.com/html/cod_zombies_portable/index.html");
        addButton("Race Survival Arena King", "https://db.duck.theducklair.com/html/race_survival_arena_king/index.html");
        addButton("Ultrakill", "https://db.duck.theducklair.com/html/ultrakill/");
        addButton("1v1.lol", "https://development.churchinhuntsville.org/resources/semag/1v1lol/index.html");
        addButton("Getting Over It", "https://development.churchinhuntsville.org/resources/semag/getting-over-it/index.html");
        addButton("Clicker Heroes", "https://development.churchinhuntsville.org/resources/semag/clickerheroes/index.html");
        addButton("Tennis", "https://thatkidfr
