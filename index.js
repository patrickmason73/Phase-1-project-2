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

//dropdown box function
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
let pokemonSelect = document.getElementsByClassName("dropdown-content") 
fetch(`https://pokeapi.co/api/v2/${classList.value}`)
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
data.data.forEach(element => {
    
});

}

const blastoise = document.getElementsByTagName('#blastoise')
const diglet = document.getElementsByTagName('#diglet')
const charizard = document.getElementsByTagName('#Charizard')
const ninetails = document.getElementsByTagName('#Ninetails')

function pokemonStats() {
    if (window.onclick = blastoise) {
     console.log("Type: Water", "HP: 79", "Attack: 83", "Defense: 100")
    }
}




//change project too hard, do genre drop box with options and attach anime suggestions to each option

