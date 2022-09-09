const init = () => {

}

document.addEventListener('DOMContentLoaded', init);

fetch("https://jikan.moe")
    .then((response) => {
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
        })
    .then(data => {
          document.getElementById('searchResults').style.display = 'Block'
          = data
        })
    .catch((error) => console.error("FETCH ERROR:", error));   

    const clearButton = document.getElementById('clear')
    function clearList(){

        while (list.firstChild){
            list.removeChild(list.firstChild)
        }
    }

    clearButton.addEventListener("click", () => {
        clearList()
    } )   