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
      <object data="https://eaglercraft1-8.github.io/" tabindex="0"></object>
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
}








let allowed = 0;
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && allowed === 0) {
     allowed = 1;
    event.preventDefault();

    const btn1 = document.createElement('button');
    btn1.textContent = 'Cookie Clicker';
    btn1.style.padding = '10px 20px';
    btn1.style.margin = '10px';
    btn1.style.backgroundColor = '#4CAF50';
    btn1.style.color = 'white';
    btn1.style.border = 'none';
    btn1.style.borderRadius = '8px';
    btn1.style.cursor = 'pointer';
    btn1.style.fontSize = '16px';
    btn1.onmouseover = () => btn1.style.backgroundColor = '#45a049';
    btn1.onmouseout = () => btn1.style.backgroundColor = '#4CAF50';
    btn1.onclick = () => cookieclicker();

    const btn2 = document.createElement('button');
    btn2.textContent = 'Proxy';
    btn2.style.padding = '10px 20px';
    btn2.style.margin = '10px';
    btn2.style.backgroundColor = '#008CBA';
    btn2.style.color = 'white';
    btn2.style.border = 'none';
    btn2.style.borderRadius = '8px';
    btn2.style.cursor = 'pointer';
    btn2.style.fontSize = '16px';
    btn2.onmouseover = () => btn2.style.backgroundColor = '#007bb5';
    btn2.onmouseout = () => btn2.style.backgroundColor = '#008CBA';
    btn2.onclick = () => proxy();

    const btn3 = document.createElement('button');
    btn3.textContent = 'Minecraft 1.8.8';
    btn3.style.padding = '10px 20px';
    btn3.style.margin = '10px';
    btn3.style.backgroundColor = '#f39c12';
    btn3.style.color = 'white';
    btn3.style.border = 'none';
    btn3.style.borderRadius = '8px';
    btn3.style.cursor = 'pointer';
    btn3.style.fontSize = '16px';
    btn3.onmouseover = () => btn3.style.backgroundColor = '#e67e22';
    btn3.onmouseout = () => btn3.style.backgroundColor = '#f39c12';
    btn3.onclick = () => minecraft188();

    const btn4 = document.createElement('button');
    btn4.textContent = 'Minecraft 1.12';
    btn4.style.padding = '10px 20px';
    btn4.style.margin = '10px';
    btn4.style.backgroundColor = '#9b59b6';
    btn4.style.color = 'white';
    btn4.style.border = 'none';
    btn4.style.borderRadius = '8px';
    btn4.style.cursor = 'pointer';
    btn4.style.fontSize = '16px';
    btn4.onmouseover = () => btn4.style.backgroundColor = '#8e44ad';
    btn4.onmouseout = () => btn4.style.backgroundColor = '#9b59b6';
    btn4.onclick = () => minecraft112();

    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
    document.body.appendChild(btn3);
    document.body.appendChild(btn4);
  }
});

