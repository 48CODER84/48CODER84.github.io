funcion cookieclicker(){
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











document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
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
    btn2.onclick = () => alert('Button 2 clicked!');

    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
  }
});
