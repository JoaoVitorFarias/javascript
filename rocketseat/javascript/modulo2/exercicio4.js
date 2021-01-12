var nomes = ["Diego", "Gabriel", "Lucas"];
var list =document.querySelector('ul.listaNomes');

listar();

function adicionar(){
  var inputElement = document.querySelector('input[name=nome]');
  var text = inputElement.value;
  inputElement.value = '';
  adicionaElemento(text);
}

function listar(){
  for (nome of nomes){
    var li = document.createElement('li');
    var text = document.createTextNode(nome);
    li.appendChild(text);
    list.appendChild(li);
  }
}

function adicionaElemento(nome){
    var li = document.createElement('li');
    var text = document.createTextNode(nome);
    li.appendChild(text);
    list.appendChild(li);
}