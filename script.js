alert("LHS V3 IS HERE! Save files have been saved, regardless of if you exported your file or not! A discord server has also been made for announcements: https://discord.gg/2Mwf5URA  NOTICE: LHS Proxy delayed due to issues");
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
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        object {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <object data="`+url+`"></object>
    </body>
  </html>
`);
   a.document.close();
}
function cookieclicker(){
   let a = window.open("about:blank");

fetch("https://thatkidfr.github.io/index.html")
  .then(r => r.text())
  .then(html => {

    let patched = html.replace(
      /<head>/i,
      `<head><base href="https://thatkidfr.github.io/">`
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
      `<head><base href="https://thatkidfr.github.io/passwordwithvercel/">`
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
   a.document.write(`
  <html>
    <head>
      <title>Google Doc</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        object {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <object data="https://eaglercraft-88a.pages.dev/" tabindex="0"></object>
      <script>
        document.querySelector("object").focus();
      </script>
    </body>
    
  </html>
`);
   a.document.close();
}
function credits(){
   let a = window.open("about:blank");
   a.document.write(`
  <html>
    <head>
      <title>Google Doc</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <h2>Developed by a student at Leigh High</h2>
      <strong><h3>LHS Proxy</h3></strong>
      <ul>
      <li>P​​r​​o​​x​​y front and backend deployed and put together by site owner</li>
      <li>P​​r​​o​​x​​​y front-end created by another student</li>
      <li>U​​​​l​​t​​​​​​r​​a​​​​v​​i​​​​​o​l​​​e​​​t​ p​​​​ro​​​​​x​​​​​​y backend</li>
      </ul>
      <p style="color: white;">The front-end is pretty sigma</p>
      <p>Not much else to say I guess</p>
      <p style="color: white;">Goguardian is so dogwater</p>
    </body>
    
  </html>
`);
   a.document.close();
}
function logs(){
   let a = window.open("about:blank");
   a.document.write(`
  <html>
    <head>
      <title>Google Doc</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <h2>Current - 3.0</h2>
      <h3>More games coming soon!</h3>
      <h1>LHS 3</h1>
      <ul>
      <li>UUID Security</li>
      <li>Faster Site Access</li>
      </ul>
      <h3>3.1</h3>
      <ul>
      <li>Added COD Zombies</li>
      <li>Removed BSS - May be added back later</li>
      <li>Added Race Survival Arena King</li>
      </ul>
      <h1>LHS 2</h1>
      <ul>
      <li>Canvas Security</li>
      <li>Added Games</li>
      </ul>
      <h3>2.4</h3>
      <ul>
      <li>Added New Polytrack</li>
      <li>Added Bee Swarm Simulator *bugged*</li>
      <li>Added Help Button</li>
      </ul>
      <h3>2.3</h3>
      <ul>
      <li>Added Extra Games for Beta Testing</li>
      <li>Added Hollow Knight</li>
      <li>Added Polytrack</li>
      </ul>
      <h3>2.2</h3>
      <ul>
      <li>Added Form Suggestions</li>
      <li>Added BlackJack</li>
      <li>Added Retro Bowl</li>
      <li>Added 2048</li>
      <li>Added Drive Mad</li>
      </ul>
      <h3>2.1</h3>
      <ul>
      <li>Added credits page</li>
      <li>Added logs page</li>
      </ul>
      <h3>2.0</h3>
      <ul>
      <li>Canvas Security</li>
      <li>Games Added</li>
      <li>Instant Redirect</li>
      </ul>
      <h1>LHS 1</h1>
      <ul>
      <li>Proxy Only</li>
      <li>Obfuscated Code Access</li>
      <li>Release of LHS</li>
      </ul>
    </body>
    
  </html>
`);
   a.document.close();
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

    createButton('Game Suggestions', '#9b59b6', '#8e44ad', 'https://docs.google.com/forms/d/e/1FAIpQLSe2tpYcWk9raN6wWIF7qKJilht7aFi6PViRnLt2zfiymXL_ig/viewform?usp=dialog');
    createButton('Cookie Clicker', '#4CAF50', '#45a049', 'cookieclicker');
    createButton('Proxy', '#008CBA', '#007bb5', 'https://gointerstellar.app');
    createButton('Minecraft 1.8.8', '#f39c12', '#e67e22', 'minecraft188');
    createButton('Minecraft 1.12', '#9b59b6', '#8e44ad', 'https://eaglercrafter112.github.io/eaglercraft/');
    createButton('Crossy Road', '#e74c3c', '#c0392b', 'https://azgames.io/game/crossy-road/');
    createButton('FNAF 1', '#2ecc71', '#27ae60', 'https://thatkidfr.github.io/FNAF1/');
    createButton('BlackJack', '#3498db', '#2980b9', 'https://funschoolmath.github.io/BlackJack/index.html');
    createButton('Retro Bowl', '#e67e22', '#d35400', 'https://funschoolmath.github.io/retrobowl/index.html');
    createButton('2048', '#f1c40f', '#f39c12', 'https://funschoolmath.github.io/2048/index.html');
    //createButton('Slope', '#9b59b6', '#8e44ad', 'http://storage.y8.com/y8-studio/unity_webgl/Gani/slope-game_2025_v3/index.html');
    createButton('Drive Mad', '#1abc9c', '#16a085', 'https://thatkidfr.github.io/drive-mad/');
    createButton('Hollow Knight', '#3498db', '#2980b9', 'https://thatkidfr.github.io/hollow_knight/');
    createButton('Old Polytrack', '#e67e22', '#d35400', 'https://thatkidfr.github.io/polytrack/');
    createButton('New Polytrack', '#3498db', '#2980b9', 'https://app-polytrack.kodub.com/0.5.1/');
    //createButton('BSS', '#3498db', '#2980b9', 'https://dddatt.github.io/bss/');
    createButton('COD Zombies', '#2e8a0c', '#1d5907', 'https://db.duck.theducklair.com/html/cod_zombies_portable/index.html');
    createButton('Race Survival Arena King', '#17d4b4', '#13ab92', 'https://db.duck.theducklair.com/html/race_survival_arena_king/index.html');


    




    const creditsBtn = document.createElement('button');
    creditsBtn.textContent = 'Credits';
    creditsBtn.style.position = 'fixed';
    creditsBtn.style.bottom = '20px';
    creditsBtn.style.right = '20px';
    creditsBtn.style.padding = '10px 20px';
    creditsBtn.style.backgroundColor = '#34495e';
    creditsBtn.style.color = 'white';
    creditsBtn.style.border = 'none';
    creditsBtn.style.borderRadius = '8px';
    creditsBtn.style.cursor = 'pointer';
    creditsBtn.style.fontSize = '14px';
    creditsBtn.onmouseover = () => creditsBtn.style.backgroundColor = '#2c3e50';
    creditsBtn.onmouseout = () => creditsBtn.style.backgroundColor = '#34495e';
    creditsBtn.onclick = () => credits();
    document.body.appendChild(creditsBtn);



    const logsBtn = document.createElement('button');
    logsBtn.textContent = 'Logs';
    logsBtn.style.position = 'fixed';
    logsBtn.style.bottom = '20px';
    logsBtn.style.left = '20px';
    logsBtn.style.padding = '10px 20px';
    logsBtn.style.backgroundColor = '#34495e';
    logsBtn.style.color = 'white';
    logsBtn.style.border = 'none';
    logsBtn.style.borderRadius = '8px';
    logsBtn.style.cursor = 'pointer';
    logsBtn.style.fontSize = '14px';
    logsBtn.onmouseover = () => logsBtn.style.backgroundColor = '#2c3e50';
    logsBtn.onmouseout = () => logsBtn.style.backgroundColor = '#34495e';
    logsBtn.onclick = () => logs();
    document.body.appendChild(logsBtn);


    const extraGamesBtn = document.createElement('button');
    extraGamesBtn.textContent = 'Extra Games';
    extraGamesBtn.style.position = 'fixed';
    extraGamesBtn.style.bottom = '20px';
    extraGamesBtn.style.left = '50%';
    extraGamesBtn.style.transform = 'translateX(-50%)';
    extraGamesBtn.style.padding = '10px 20px';
    extraGamesBtn.style.backgroundColor = '#000000';
    extraGamesBtn.style.color = 'white';
    extraGamesBtn.style.border = 'none';
    extraGamesBtn.style.borderRadius = '8px';
    extraGamesBtn.style.cursor = 'pointer';
    extraGamesBtn.style.fontSize = '14px';
    extraGamesBtn.onmouseover = () => extraGamesBtn.style.backgroundColor = '#424242';
    extraGamesBtn.onmouseout = () => extraGamesBtn.style.backgroundColor = '#000000';
    extraGamesBtn.onclick = () => extragames();
    document.body.appendChild(extraGamesBtn);

  }
});
