function cookieclicker(){
   let a = window.open("about:blank");

fetch("https://48coder84.github.io/cookieclicker/index.html")
  .then(r => r.text())
  .then(html => {

    let patched = html.replace(
      /<head>/i,
      `<head><base href="https://48coder84.github.io/cookieclicker/">`
    );

    a.document.open();
    a.document.write(patched);
    a.document.close();
  });
}
function proxy(){
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
      <object data="https://gointerstellar.app"></object>
    </body>
  </html>
`);
   a.document.close();

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
function minecraft112(){
   if (!(localStorage.getItem("hideAlert2") === "true")) {
      let showAgain = confirm("If having problems with keys not pressing - click on the screen before game loads\n\nPress OK to continue.\nPress Cancel to never show this again.");
      if (!showAgain) {
         localStorage.setItem("hideAlert2", "true");
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
      <object data="https://eaglercrafter112.github.io/eaglercraft/" tabindex="0"></object>
      <script>
        document.querySelector("object").focus();
      </script>
    </body>
    
  </html>
`);
   a.document.close();
}
function crossyroad(){
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
      <object data="https://azgames.io/game/crossy-road/"></object>
    </body>
    
  </html>
`);
   a.document.close();
}
function fnaf1(){
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
      <object data="https://thatkidfr.github.io/FNAF1/"></object>
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
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <h2>Developed by a student at Leigh High</h2>
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
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <h2>Current - 2.1</h2>
      <h1>LHS 2</h1>
      <ul>
      <li>Canvas Security</li>
      <li>Added Games</li>
      </ul>
      <h3>2.1</h3>
      <ul>
      <li>Added credits page</li>
      <li>Added logs page</li>
      </ul>
      <h3>2.0</h3>
      <ul>
      <li>Canvas security</li>
      <li>Games added</li>
      <li>Instant redirect</li>
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

let allowed = 0;

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && allowed === 0) {
    allowed = 1;
    event.preventDefault();

    function createButton(text, bgColor, hoverColor, onClickFn) {
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
      btn.onclick = onClickFn;
      document.body.appendChild(btn);
    }

    createButton('Cookie Clicker', '#4CAF50', '#45a049', cookieclicker);
    createButton('Proxy', '#008CBA', '#007bb5', proxy);
    createButton('Minecraft 1.8.8', '#f39c12', '#e67e22', minecraft188);
    createButton('Minecraft 1.12', '#9b59b6', '#8e44ad', minecraft112);
    createButton('Crossy Road', '#e74c3c', '#c0392b', crossyroad);
    createButton('FNAF 1', '#2ecc71', '#27ae60', fnaf1);





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
  }
});


