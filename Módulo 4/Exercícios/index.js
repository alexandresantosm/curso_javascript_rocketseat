var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

inputElement.onclick = function() {
  clearInput();
  var repositoryElement = document.createElement('li');
  var repositoryText = document.createTextNode('Carregando...');

  repositoryElement.appendChild(repositoryText);
  listElement.appendChild(repositoryElement);
}

function findRepository() {
  axios.get(' https://api.github.com/users/'+ inputElement.value +'/repos')
    .then(function(response) {
      clearInput();

      var repositorys = response.data;

      for (repository of repositorys) {
        var repositoryElement = document.createElement('li');
        var repositoryText = document.createTextNode(repository.name);

        repositoryElement.appendChild(repositoryText);
        listElement.appendChild(repositoryElement);

      }
      console.log(response.data);
    })
    .catch(function(error) {
      clearInput();

      alert('Erro 404: '+ error);
    });

  clearInput();
}

function clearInput() {
  inputElement.value = '';
  listElement.innerHTML = '';
}
