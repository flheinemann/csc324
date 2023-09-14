// Chapter 4 Homework
// Finn Heinemann

// Exercise 1 - Sum and Range

// Write range function

function range(start,end){
    let rangeOutput  = []
    while(start <= end){
        rangeOutput.push(start);
        start =start+1;

    }
    return(rangeOutput);
}

console.log(range(1,10))

// Write sum function

function sum(input){
    let currentSum = 0;
    for(let position=0; position <= input.length-1; position=position+1){
        currentSum = currentSum+ input[position];
    }
    return(currentSum);
}

console.log(sum([1,2,3,4,5,6,7,8,9,10]));

// Modify the range function

function range2 (start, end, step=1){
    let rangeOutput  = []

    if(step>0){
    while(start <= end){
        rangeOutput.push(start);
        start =start+step;
    }
}
else{
    while (start >= end){
        rangeOutput.push(start);
        start =start+step;
    }
}
    return(rangeOutput);
}

console.log(range2(5,1,-1));

// Try the new range function with the sum function

function range2 (start, end, step=1){
    let rangeOutput  = []

    if(step>0){
    while(start <= end){
        rangeOutput.push(start);
        start =start+step;
    }
}
else{
    while (start >= end){
        rangeOutput.push(start);
        start =start+step;
    }
}
    return(rangeOutput);
}

function sum(input){
    let currentSum = 0;
    for(let position=0; position <= input.length-1; position=position+1){
        currentSum = currentSum+ input[position];
    }
    return(currentSum);
}

console.log(sum(range2(10,1,-1)));


// Exercise 2 - Reversing an Array

// Normal reverse array function

function reverseArray(input){
    let reversedArray =[];
    for(let i = input.length-1; i >= 0; i=i-1){
        reversedArray.push(input[i]);
    }
    return(reversedArray);
}

console.log(reverseArray([1,2,3,4,5]));

// Reversed at certain place function
// I got the Math.floor function from the hints in the text book

function reverseArrayInPlace(inputArray){
    let reversedInputArray =[];
    for(let number = 0; number < Math.floor((inputArray.length+1) /2); number = number+1){
        let initial= inputArray[number];
        reversedInputArray[number]=inputArray[inputArray.length-1-number];
        reversedInputArray[inputArray.length -1 -number]=initial;
    }
    return reversedInputArray;
}


console.log(reverseArrayInPlace([1,2,3,4]));  
console.log(reverseArrayInPlace(["A", "B", "C"]));