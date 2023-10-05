/********************************************************************
 * 
 * Script to insert a random image
 * upon click of a button.
 * 
 *******************************************************************/

const imageNumbers = [1, 2, 3, 4];

const button = document.querySelector("#randomizer");


button.addEventListener("click", placeRandomImage);

function placeRandomImage() {
  let image = document.querySelector("#random-image");
  let spot = Math.floor(Math.random() * 4);
  let numb = imageNumbers[spot];
  image.src = `images/image_${numb}.jpg`;
 }



 
 
