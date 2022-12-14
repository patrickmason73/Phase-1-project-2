//DOMContentLoaded callback function

const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
        
        
        
    });
const myDropdown = document.getElementById("myDropdown")






myDropdown.addEventListener("change", (event) => 
{console.log(event.target.value)
  fetchPokemon(event);
  
}

)

  }
  
  document.addEventListener('DOMContentLoaded', init)
  // document.addEventListener('submit', () => {
  
  // return document.getElementById("myDropdown").classList.toggle("show")
  // })
  


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



function postPokemon(event) {
  event.preventDefault()
    if(insertPokemon.errorMsg != null) {
      errorMsg.remove()
    }
let newPokemonName = document.getElementById('newPokemonName')
let newData = newPokemonName.value
  fetch(`https://pokeapi.co/api/v2/pokemon/${newData}`)
  .then(res => res.json())
  .then(data => {
    let stat = document.getElementById("stat")
    let movesNameArr = []
    let toBeDeleted = document.getElementsByTagName("ul")
    let ul = document.createElement("ul")
    let toBeDeletedImg = document.getElementById("newImg")
    let toBeDeletedImg2 = document.getElementById("shinyImg")
    

    if (toBeDeletedImg2 != null) {
      toBeDeletedImg2.remove()
    }

    if (toBeDeletedImg != null ) {
      toBeDeletedImg.remove();
    }
    
    while (toBeDeleted.length > 0) {
      toBeDeleted[0].remove()
    }
    data.moves.forEach((item) => {
      movesNameArr.push(item.move.name)
    })
    movesNameArr.forEach((item) => {
      let listElement = document.createElement('li')
      listElement.textContent = item
      stat.appendChild(ul)
      ul.appendChild(listElement)
    })
    
    let img = document.createElement('img')
    img.id = "newImg"
    img.src = data.sprites.front_default
    document.getElementById('body').appendChild(img) 

    let img2 = document.createElement('img')
      img2.id = "shinyImg"
      img2.src = data.sprites.front_shiny
    let shinyPic = document.getElementById("shinyPic")
    let shinyFunction = document.getElementById("shinyFunction")
    shinyPic.appendChild(img2)
    shinyFunction.addEventListener("click", () => {
      img2.style.display = "block"
      img2.style.height = 300
      img2.style.width = 300
      })
    
  })
  .catch((error) => {
    let errorMsg = document.createElement('p')
    errorMsg.textContent = "check your spelling ???"
    insertPokemon.append(errorMsg)
    console.log(error)
  })
}

const insertPokemon = document.getElementById('insertPokemon')
insertPokemon.addEventListener('submit', postPokemon)
 
function displayPokemon(data) {
    
    let stat = document.getElementById("stat")
    let movesNameArr = []
    let toBeDeleted = document.getElementsByTagName("ul")
    let ul = document.createElement("ul")
    let toBeDeletedImg = document.getElementById("newImg")
    let toBeDeletedImg2 = document.getElementById("shinyImg")

    if (toBeDeletedImg2 != null) {
      toBeDeletedImg2.remove()
    }

    if (toBeDeletedImg != null ) {
      toBeDeletedImg.remove();
    }
    
    while (toBeDeleted.length > 0) {
      toBeDeleted[0].remove()
    }
    data.moves.forEach((item) => {
      movesNameArr.push(item.move.name)
    })
    movesNameArr.forEach((item) => {
      let listElement = document.createElement('li')
      listElement.textContent = item
      stat.appendChild(ul)
      ul.appendChild(listElement)
    })
    
    let img = document.createElement('img')
    img.id = "newImg"
    img.src = data.sprites.front_default
    document.getElementById('body').appendChild(img) 

    let img2 = document.createElement('img')
      img2.id = "shinyImg"
      img2.src = data.sprites.front_shiny
    let shinyPic = document.getElementById("shinyPic")
    let shinyFunction = document.getElementById("shinyFunction")
    shinyPic.appendChild(img2)
    shinyFunction.addEventListener("click", () => {
      img2.style.display = "block"
      img2.style.height = 300
      img2.style.width = 300
      })
    
  }


