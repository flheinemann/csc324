/********************************************************************
 * 
 * This solution resembles the list-build
 * example that we studied in class.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

function populateTable(arr){
  let table = document.querySelector("#bhangra");
  let cells = "<tbody>"

  //get column headers
  cells += ` 
  <tr>
  <th>Name</th>
  <th>Year of Birth</th>
  <th>Link</th>
  </tr>`;

  //get content for the table cells
  for(let i=0; i< artists.length;i++){ 
    cells += "<tr>";
    cells += `<td> ${artists[i].name} </td>`;
    cells += `<td> ${artists[i].birthYear} </td>`;
    cells += `<td><a href "${artists[i].link}"> ${artists[i].link} </td>`;
    cells += "</tr>";
  }

  cells += "</tbody>";

  table.innerHTML = cells;
}

populateTable(artists);

//first, find the buttons

const namebutton = document.querySelector("#name-button");
const datebutton = document.querySelector("#date-button");
const randombutton = document.querySelector("#random-button");

//next, add eventlisteners:

namebutton.addEventListener("click", sortByName);
datebutton.addEventListener("click", sortByDate);
randombutton.addEventListener("click", sortByRandom);

//declare listener function:

function byName(a,b){
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
}

function sortByName(){
  let sortedArray = artists.sort(byName);
  populateTable(sortedArray);
}

function byDate(a,b){
  if(a.birthYear < b.birthYear) return -1;
  if(a.birthYear > b.birthYear) return 1;
  return 0;
}

function sortByDate(){
  let sortedArray = artists.sort(byDate);
  populateTable(sortedArray);
}

Array.prototype.shuffle = function (){
  let input = this;
  for(let i=input.length-1; i>=0; i--){
    let randomIndex = Math.floor(Math.random()*(i+1));
    let itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
function sortByRandom(){
  let shuffledArray = artists.shuffle();
  populateTable(shuffledArray); 
}


 
 
