// DOM é basicamente a árvore de elemnetos dentro do HTML,
// ela é composta por todos os elementos dispostos em tela.
// onmouseover, ondblclick
/*onkeypress
function mostraAlerta(){
alert('Botão foi clicado');
}*/

// document.getElementsByTagName('tag') sempre vai retornar um vetor
// document.getElementsByTagName('tag')[0] vai retornar só o primeiro elemento

//var inputElement = document.querySelector('body div#app input');

/*var inputElement = document.querySelector('input[name=nome]'); só retorna um elemento
para retornar todos os elementos usar : document.querySelectorAll('input');
console.log(inputElement);*/


/*var inputElement = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function() {
var text = inputElement.value;
alert(text);
}*/

/*var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'http://google.com');

var textElement = document.createTextNode('Acessar o Google');
linkElement.appendChild(textElement);

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);*/

var boxElement = document.querySelector('.box');
boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = '#f159';
