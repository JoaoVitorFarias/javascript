// Requisição AJAX
/*var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/JoaoVitorFarias');
xhr.send(null);

xhr.onreadystatechange = function() {
if (xhr.readyState === 4){
  console.log(JSON.parse(xhr.reponseText));
}
}*/

/*Promisses são códigos que não vão influenciar na linha do tempo do codigo.
São códigos/funções que vão devolver o valor de resultado só depois de um tempo 
e não é necessário se preocupar quando o valor será retornado, pois o js vai 
continuar com a execução normalmente.*/

/*var minhaPromise = function(){
return new Promise(function(resolve,reject){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/users/JoaoVitorFarias');
  xhr.send(null);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
      if(xhr === 200){
        resolve(JSON.parse(xhr.responseText));
      }else{
        reject('Erro na requisição');
      }
    }
  }
});
}

minhaPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });*/

  //Axios
  axios.get('https://api.github.com/users/JoaoVitorFarias')
  // get , post , delete, put
  .then(function(response) {
    console.log(response.data.avatar_url);
  })
  .catch(function(error) {
    console.warn(error);
  });