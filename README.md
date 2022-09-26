
# Phase-1-project: Pat's Pokemon


@@ -6,12 +6,29 @@ Pat's pokemon is a webpage that allows the user to select a pokemon from a dropd

## Usage

![Alt text](Desktop/Capture-1.png "Optional title")
![Capture 1](https://user-images.githubusercontent.com/107088396/192360788-8853654d-9dec-481b-899c-393efbd2d197.PNG)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
As you can see, the user selected Blastoise and the webpage fetched the data for blastoise and displayed the move list and sprite. If a user wanted to, with the way the HTML is set up, they can add any pokemon to the html list options and it will be added to the dropdown menu, and when selected, will display the correct information.

## License
[MIT](https://choosealicense.com/licenses/mit/)
## HTML
Within the HTML:

![cap 2](https://user-images.githubusercontent.com/107088396/192361908-192adc99-a928-4101-b394-b6dec3e16694.PNG)

Anyone can add a pokemon as long as the name is spelled correctly and has existed within the show or the games. The javascript will fetch the correct data for that pokemon by insterting the pokemon name into our API link.

## JavaScript
Within JS:

![cap 3](https://user-images.githubusercontent.com/107088396/192362637-9bdde122-bf5a-4f75-817e-babaef3438c5.PNG)


If I wanted to add any of the other stats/attributes of the pokemon to display on the webpage, all I would have to do is create a similar ForEach() function and make a new array for that data, then it will iterate over the array of data and return what we are looking for. Throwing a debugger in will allow you to see what all the data we have by typing "data." within the console. The debugger is very useful for finding what data we have access to and can manipulate.


## Acknowledgement
Data came from https://pokeapi.co/ 


Pokemon logo taken from https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg