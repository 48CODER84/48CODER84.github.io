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
  }
});

