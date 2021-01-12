var botao = document.createElement('button');
var textoBotao = document.createTextNode('Print quadrado');
botao.appendChild(textoBotao);

var container = document.querySelector('#app');
container.appendChild(botao);

botao.onclick = function (){
var box = document.querySelector('.box');
  box.style.width = 100;
  box.style.height =100;
  box.style.backgroundColor = '#f00';
  box.style.position= 'relative';
  box.style.top = Math.floor(480 * Math.random()+1);
  box.style.left = Math.floor(1000 * Math.random()+40);
  
}