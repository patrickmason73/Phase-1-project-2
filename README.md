
# Phase-1-project: Pat's Pokemon


Pat's pokemon is a webpage that allows the user to select a pokemon from a dropdown menu and it will display their moves as well as their original sprite(image). The user can also click the "SHINY" button to show the shiny version of the selected pokemon. If the pokemon the user is searching for is not in the dropdown, they can seach for the pokemon name in the search box on the right.



## Usage

![evee cap](https://user-images.githubusercontent.com/107088396/210707234-0f587432-bc8c-4fcc-a56c-6f38113cfb6b.PNG)


As you can see, the user selected Eevee and the webpage fetched the data for Eevee and displayed the move list + sprite in the DOM. 


![charmander cap](https://user-images.githubusercontent.com/107088396/210707505-a81d1bd3-b82f-48c6-a55f-5982002a7ede.PNG)

Here the user searched for a pokemon not listed in the dropdown menu, the pokemon moves and sprite were brought up, if the user were to spell it wrong, a message will pop up telling them to check their spelling. They also clicked the shiny button above the original sprite.


## HTML
Within the HTML:

![html piccc](https://user-images.githubusercontent.com/107088396/210708783-1e7492f0-4bb9-48b9-996c-a1ff0f974683.PNG)


Here is what the dropdown and search bar HTML look like, nothing too compliacted going on. I found forms easy to work with for this app.

## JavaScript
Within JS:

![Captureeeee lolll](https://user-images.githubusercontent.com/107088396/210709153-9c503a92-d615-4a82-8485-0dfcf75278ac.PNG)



Here is the function for the search bar, it is called on an event listener on the form. This function within the fetch is the same that is used for the dropdown menu but in callback form with very minor differences. But basically the function fetches the data from the api then appends it to different specified areas of the DOM.


## Acknowledgement
Data came from https://pokeapi.co/ 


Pokemon logo taken from https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg
