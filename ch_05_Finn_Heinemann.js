// Chapter 5 Homework
// Finn Heinemann

// Exercise 1 - Flattening

let arrays = [[1, 2, 3], [4, 5], 6];

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }



console.log(reduce(arrays,(flat,current) => flat.concat(current),[]));

console.log(arrays.reduce((flat,current) => flat.concat(current)));

// Exercise 2 - Your own Loop

function myLoop(value, test, update, body){
    for(let i = value; test(i); i=update(i)) {
        body(i);
    }

}

myLoop(3, n => n > 0, n => n - 1, console.log);

// Try it with my own function in addition to the example from the textbook

function timesTen(x){
   console.log (x*10);
}

myLoop(0, n => n <= 5, n => n+1, timesTen);

// Exercise 3 - Everything

function every(array, test){
  passedArray=[];
  for(let i=0; i<array.length;i++){
    if(test(array[i])){
      passedArray.push(array[i]);
    }
  }
  if(passedArray.length==array.length){
    return true;
  }
  else{
    return false;
  }
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));