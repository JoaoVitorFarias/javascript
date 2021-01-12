var botao = document.createElement('button');
var textoBotao = document.createTextNode('Print quadrado');
botao.appendChild(textoBotao);

var container = document.querySelector('#app');
container.appendChild(botao);

botao.onclick = function (){
var box = document.querySelector('.box');
  box.style.width = 100;
  box.style.height =100;
  box.style.backgroundColor = getRandomColor();
  box.style.position= 'relative';
  box.style.top = Math.floor(480 * Math.random()+1);
  box.style.left = Math.floor(1000 * Math.random()+40);
  box.onmouseover = function () {
    var newColor = getRandomColor();
    box.style.backgroundColor = newColor;
  }
  
}

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}