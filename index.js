const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
        console.log(event)
    });
    var myDropdown = document.getElementById("myDropdown")
console.log(myDropdown)
myDropdown.addEventListener("change", (event) => 
{console.log(event.target.value)
  fetchPokemon(event);
}
)
  }
  
  document.addEventListener('DOMContentLoaded', init)
  function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

//dropdown box function


function fetchPokemon(event){
fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
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
    const head = document.createElement("h1")
    const stat = document.getElementById("stat")
    stat.appendChild(head)
    document.body.style.backgroundImage = (`https://img.pokemondb.net/sprites/home/normal/2x/avif/${data.target}.avif`)
  };



const div = document.createElement("div")
div.className = "class"





// var blastoise = document.getElementById('blastoise')
// var diglet = document.getElementById('#diglet')
// var charizard = document.getElementByTagName('#Charizard')
// var ninetails = document.getElementByTagName('#Ninetails')








//change project too hard, do genre drop box with options and attach anime suggestions to each option

