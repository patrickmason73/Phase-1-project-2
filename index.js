const init = () => {
    document.addEventListener('DOMContentLoaded', init);
}


fetch("https://api.jikan.moe/v4/anime")
    .then((response) => {
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
        })
    .then(data => {
        console.log(data); 
        displaySearch(data);
        })
    .catch((error) => console.error("FETCH ERROR:", error));   
 
    function displaySearch(data) {
        const animeDiv = document.getElementById("anime")
        data.array.forEach(anime => {
            const animeElement = document.createElement('p')
            animeElement.innerText = `Anime Name: ${anime.name}`
            animeDiv.append(animeElement)
        });
        heading.innerHTML = anime;
        animeDiv.appendChild(heading);
    }

    const clearButton = document.getElementById('clear')
    function clearList(){
        while (list.firstChild){
            list.removeChild(list.firstChild)
        }
    }

    clearButton.addEventListener("click", () => {
        clearList()
    } )   