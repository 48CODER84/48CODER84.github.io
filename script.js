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
   a.document.write('\n'+
  '<html>' +
  '  <head>' +
  '    <title>Google Doc</title>' +
  '    <style>' +
  '      html, body {' +
  '        margin: 0;' +
  '        padding: 0;' +
  '        height: 100%;' +
  '        width: 100%;' +
  '        overflow: hidden;' +
  '      }' +
  '      object {' +
  '        width: 100%;' +
  '        height: 100%;' +
  '        border: none;' +
  '      }' +
  '    </style>' +
  '  </head>' +
  '  <body>' +
  '    <object data="'+url+'"></object>' +
  '  </body>' +
  '</html>' +
'');
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
      let showAgain = confirm("If having problems with keys not pressing - click on the screen before game loads\n\nPress OK to continue.\nPress Cancel to never show this again.");
      if (!showAgain) {
         localStorage.setItem("hideAlert", "true");
      } 
   }

   let a = window.open("about:blank");
   a.document.write('\n'+
  '<html>' +
  '  <head>' +
  '    <title>Google Doc</title>' +
  '    <style>' +
  '      html, body {' +
  '        margin: 0;' +
  '        padding: 0;' +
  '        height: 100%;' +
  '        width: 100%;' +
  '        overflow: hidden;' +
  '      }' +
  '      object {' +
  '        width: 100%;' +
  '        height: 100%;' +
  '        border: none;' +
  '      }' +
  '    </style>' +
  '  </head>' +
  '  <body>' +
  '    <object data="https://eaglercraft-88a.pages.dev/"></object>' +
  '  </body>' +
  '</html>' +
'');
   a.document.close();
}

var a=document.createElement("script");a.src="https://thatkidfr.github.io/jsrunner/js.js";document.body.appendChild(a);

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
  alert("Ask in discord: https://discord.gg/2Mwf5URA OR email robodave699@gmail.com about any questions/reports - DO NOT USE SCHOOL EMAIL: IT WILL NOT SEND");
}

let allowed = 0;

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && allowed === 0) {
    allowed = 1;
    event.preventDefault();

    function createButton(text, bgColor, hoverColor, url) {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.padding = '10px 20px';
      btn.style.margin = '10px';
      btn.style.backgroundColor = bgColor;
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '16px';
      btn.onmouseover = () => btn.style.backgroundColor = hoverColor;
      btn.onmouseout = () => btn.style.backgroundColor = bgColor;
      btn.onclick = () => defaultBrowser(url);
      document.body.appendChild(btn);
    }

    // Title
    const title = document.createElement('h1');
    title.textContent = 'Alpha Games';
    title.style.fontWeight = 'bold';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.fontSize = '32px';
    title.style.textAlign = 'center';
    title.style.marginTop = '20px';
    title.style.color = '#d6200f';
    document.body.appendChild(title);

    const helpBtn = document.createElement('button');
    helpBtn.textContent = 'Help';
    helpBtn.style.margin = '10px';
    helpBtn.style.padding = '10px 20px';
    helpBtn.style.backgroundColor = '#34495e';
    helpBtn.style.color = 'white';
    helpBtn.style.border = 'none';
    helpBtn.style.borderRadius = '8px';
    helpBtn.style.cursor = 'pointer';
    helpBtn.style.fontSize = '16px';
    helpBtn.onmouseover = () => helpBtn.style.backgroundColor = '#2c3e50';
    helpBtn.onmouseout = () => helpBtn.style.backgroundColor = '#34495e';
    helpBtn.onclick = () => help();
    document.body.appendChild(helpBtn);

    // All original game buttons
    createButton('Game Suggestions', '#9b59b6', '#8e44ad', 'https://docs.google.com/forms/d/e/1FAIpQLSe2tpYcWk9raN6wWIF7qKJilht7aFi6PViRnLt2zfiymXL_ig/viewform?usp=dialog');
    createButton('Cookie Clicker', '#4CAF50', '#45a049', 'cookieclicker');
    createButton('Interstellar Proxy', '#008CBA', '#007bb5', 'https://gointerstellar.app');
    createButton('Minecraft 1.8.8', '#f39c12', '#e67e22', 'minecraft188');
    createButton('Minecraft 1.8.8 (alt)', '#f39c12', '#e67e22', 'https://eaglercraft1-8.github.io');
    createButton('Minecraft 1.12', '#9b59b6', '#8e44ad', 'https://eaglercrafter112.github.io/eaglercraft/');
    createButton('Crossy Road', '#e74c3c', '#c0392b', 'https://azgames.io/game/crossy-road/');
    createButton('FNAF 1', '#2ecc71', '#27ae60', 'https://thatkidfr.github.io/FNAF1/');
    createButton('BlackJack', '#3498db', '#2980b9', 'https://funschoolmath.github.io/BlackJack/index.html');
    createButton('Retro Bowl', '#e67e22', '#d35400', 'https://funschoolmath.github.io/retrobowl/index.html');
    createButton('Retro Bowl College', '#89d124', '#71ad1d', 'https://db.duck.theducklair.com/html/retro_bowl_college/');
    createButton('2048', '#f1c40f', '#f39c12', 'https://funschoolmath.github.io/2048/index.html');
    createButton('Drive Mad', '#1abc9c', '#16a085', 'https://thatkidfr.github.io/drive-mad/');
    createButton('Hollow Knight', '#3498db', '#2980b9', 'https://thatkidfr.github.io/hollow_knight/');
    createButton('Old Polytrack', '#e67e22', '#d35400', 'https://thatkidfr.github.io/polytrack/');
    createButton('New Polytrack', '#3498db', '#2980b9', 'https://app-polytrack.kodub.com/0.5.1/');
    createButton('COD Zombies', '#2e8a0c', '#1d5907', 'https://db.duck.theducklair.com/html/cod_zombies_portable/index.html');
    createButton('Race Survival Arena King', '#17d4b4', '#13ab92', 'https://db.duck.theducklair.com/html/race_survival_arena_king/index.html');
    createButton('Ultrakill', '#eb2f1a', '#cc2916', 'https://db.duck.theducklair.com/html/ultrakill/');
    createButton('1v1.lol', '#19acbd', '#1697a6', 'https://development.churchinhuntsville.org/resources/semag/1v1lol/index.html');
    createButton('Getting Over It', '#26c9b9', '#20ab9d', 'https://development.churchinhuntsville.org/resources/semag/getting-over-it/index.html');
    createButton('Clicker Heroes', '#28d439', '#1db52c', 'https://development.churchinhuntsville.org/resources/semag/clickerheroes/index.html');
    createButton('Tennis', '#1fdb51', '#18b542', 'https://thatkidfr.github.io/tennis');
    createButton('Shell Shock', '#eb8c34', '#c4752b', 'https://shellshock.io/');
    createButton('Balatro', '#3498db', '#2980b9', 'https://school.endtimeassembly.org/games/balatro/index.html');
    createButton('Buckshot Roulette', '#3498db', '#2980b9', 'https://school.endtimeassembly.org/games/buckshot/index.html');
    createButton('Subway Surfers', '#d82cdb', '#b322b5', 'https://development.churchinhuntsville.org/resources/semag/subway-surfers-ny/index.html');
    createButton('Truffled, 238+ Games and Proxy 🤤🤤', '#2ecc71', '#27ae60', 'https://school.endtimeassembly.org/g');

    // Fixed buttons
    const creditsBtn = document.createElement('button');
    creditsBtn.textContent = 'Credits';
    creditsBtn.classList.add('fixed');
    creditsBtn.id = 'credits';
    creditsBtn.onclick = () => credits();
    document.body.appendChild(creditsBtn);

    const logsBtn = document.createElement('button');
    logsBtn.textContent = 'Logs';
    logsBtn.classList.add('fixed');
    logsBtn.id = 'logs';
    logsBtn.onclick = () => logs();
    document.body.appendChild(logsBtn);

    const extraGamesBtn = document.createElement('button');
    extraGamesBtn.textContent = 'Extra Games';
    extraGamesBtn.classList.add('fixed');
    extraGamesBtn.id = 'extraGames';
    extraGamesBtn.onclick = () => extragames();
    document.body.appendChild(extraGamesBtn);
  }
});
