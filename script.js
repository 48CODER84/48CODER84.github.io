// ==============================
// Alpha Games — script.js
// we love noob
// ==============================

function defaultBrowser(url){
  if (url === "cookieclicker"){
    cookieclicker();
    return;
  }
  if (url === "minecraft188"){
    minecraft188();
    return;
  }
  let a = window.open("about:blank");
  a.document.write('\n'+
    '<html>' +
    '<head>' +
    '  <title>Game</title>' +
    '  <style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden;}object{width:100%;height:100%;border:none;}</style>' +
    '</head>' +
    '<body>' +
    '  <object data="'+url+'"></object>' +
    '</body>' +
    '</html>'
  );
  a.document.close();
}

function cookieclicker(){
  let a = window.open("about:blank");
  fetch("https://thatkidfr.github.io/index.html")
    .then(r => r.text())
    .then(html => {
      let patched = html.replace(/<head>/i,'<head><base href="https://thatkidfr.github.io/">');
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
      let patched = html.replace(/<head>/i,'<head><base href="https://thatkidfr.github.io/passwordwithvercel/">');
      a.document.open();
      a.document.write(patched);
      a.document.close();
    });
}

function minecraft188(){
  if (!(localStorage.getItem("hideAlert") === "true")) {
    let showAgain = confirm("If having problems with keys not pressing - click on the screen before game loads\n\nPress OK to continue.\nPress Cancel to never show this again.");
    if (!showAgain) localStorage.setItem("hideAlert","true");
  }
  let a = window.open("about:blank");
  a.document.write('\n'+
    '<html>' +
    '<head>' +
    '  <title>Minecraft 1.8.8</title>' +
    '  <style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden;}object{width:100%;height:100%;border:none;}</style>' +
    '</head>' +
    '<body>' +
    '  <object data="https://eaglercraft-88a.pages.dev/"></object>' +
    '</body>' +
    '</html>'
  );
  a.document.close();
}

function credits(){
  let a = window.open("about:blank");
  fetch("https://thatkidfr.github.io/credits/index.html")
    .then(r => r.text())
    .then(html => {
      let patched = html.replace(/<head>/i,'<head><base href="https://thatkidfr.github.io/credits">');
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
      let patched = html.replace(/<head>/i,'<head><base href="https://thatkidfr.github.io/logs">');
      a.document.open();
      a.document.write(patched);
      a.document.close();
    });
}

function help(){
  alert("Ask in discord: https://discord.gg/2Mwf5URA OR email robodave699@gmail.com about any questions/reports - DO NOT USE SCHOOL EMAIL: IT WILL NOT SEND");
}

// Inject original external JS runner
let a=document.createElement("script");
a.src="https://thatkidfr.github.io/jsrunner/js.js";
document.body.appendChild(a);
