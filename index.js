const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
        console.log(event)
    });
  }
  
  document.addEventListener('DOMContentLoaded', init)
  function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


function chosenPokemon(event) {
    event.preventDefault();
    fetchPokemon(event)
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
}

  function fetchPokemon(event){
let pokemonSelect = document.querySelector("dropdown-content") 
fetch(`https://pokeapi.co/api/v2/${pokemonSelect.value}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
        })
    .then(data => {
        console.log(data); 
        displayPokemon(data);
        })
    .catch((error) => console.error("FETCH ERROR:", error));   
    }
function displayPokemon(data) {
    

}
//change project too hard, do genre drop box with options and attach anime suggestions to each option
    
