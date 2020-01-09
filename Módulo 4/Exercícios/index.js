var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function findRepository() {
  axios.get(' https://api.github.com/users/'+ inputElement.value +'/repos')
    .then(function(response) {
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
      console.log(error);
    });

  clearInput();
}

function clearInput() {
  inputElement.value = '';
}
