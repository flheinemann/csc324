/********************************************************************
 * 
 * Your introductory remarks go here.
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

 

 // complete with code to select and populate the table

let headers = ["Name", "Date of Birth", "Link"];
let table = document.querySelector("#bhangra"); //whenever I run this code, I get an error, saying document is not defined;
                                                // couldn't figure out why but the table is displayed correctly in the browser

let cells = "<tr>"; //get column headers
for(let i=0; i<headers.length; i++){
  cells += `<th> ${headers[i]} </th>`;
}
cells += "</tr>"


for(let i=0; i< artists.length;i++){ //get content for the table cells
  cells += "<tr>";
  cells += `<td> ${artists[i].name} </td>`;
  cells += `<td> ${artists[i].birthYear} </td>`;
  cells += `<td><a href "${artists[i].link}"> ${artists[i].link} </td>`;
  cells += "</tr>";
}


table.innerHTML = cells;


