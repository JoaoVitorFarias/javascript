var nomes = ["Diego", "Gabriel", "Lucas"];
var list =document.querySelector('ul.listaNomes');

for (nome of nomes){
  var li = document.createElement('li');
  var text = document.createTextNode(nome);
  li.appendChild(text);
  list.appendChild(li);
}