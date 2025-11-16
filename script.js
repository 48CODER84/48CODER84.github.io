/* All your original functions preserved exactly */

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

/* ---- ALL OTHER ORIGINAL FUNCTIONS ---- */

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

/* ================================
   Spacebar → reveal UI
   Now: builds button grid layout
   ================================ */

let allowed = 0;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && allowed === 0) {
        allowed = 1;
        event.preventDefault();

        const content = document.getElementById("content");

        const title = document.createElement("h1");
        title.textContent = "Alpha Games";
        content.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "button-grid";
        content.appendChild(grid);

        // Helper function to add buttons to the grid
        function addButton(text, url) {
            const btn = document.createElement("button");
            btn.textContent = text;
            btn.onclick = () => defaultBrowser(url);
            grid.appendChild(btn);
        }

        /* --- ALL ORIGINAL BUTTONS --- */
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
        addButton("Tennis", "https://thatkidfr.github.io/tennis");
        addButton("Shell Shock", "https://shellshock.io/");
        addButton("Balatro", "https://school.endtimeassembly.org/games/balatro/index.html");
        addButton("Buckshot Roulette", "https://school.endtimeassembly.org/games/buckshot/index.html");
        addButton("Subway Surfers", "https://development.churchinhuntsville.org/resources/semag/subway-surfers-ny/index.html");
        addButton("Truffled (238+ Games)", "https://school.endtimeassembly.org/g");

        /* --- FIXED CORNER BUTTONS --- */
        function makeFixed(id, text, onclick) {
            const b = document.createElement("button");
            b.id = id;
            b.className = "fixed-btn";
            b.textContent = text;
            b.onclick = onclick;
            document.body.appendChild(b);
        }

        makeFixed("help", "Help", help);
        makeFixed("credits", "Credits", credits);
        makeFixed("logs", "Logs", logs);
        makeFixed("extraGames", "Extra Games", extragames);
    }
});
