var listElement = document.querySelector('ul');

function buscar(){
  var inputElement = document.querySelector('input[name=user]');
  var userName = inputElement.value;
  inputElement.value = '';
  buscaGithub(userName);
  
}

function buscaGithub(user){
  axios.get('https://api.github.com/users/' + user + '/repos')
  .then(function(response) {
    renderRepos(response.data);
  })
  .catch(function(error) {
    console.warn(error);
  });
}

function renderRepos(repos){
  listElement.innerHTML = '';
  for (repo of repos){
    var textElement = document.createTextNode(repo.name);
    var liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}