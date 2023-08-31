// Finn Heinemann
// Chapter 2 Homework

// Looping a Triangle
let line="#";
while(line.length<=7){
    console.log(line);
    line=line+"#";
}

// FizzBuzz
let current=1;

while(current<=100){
    if(current%3==0 & current%5==0){
        console.log("FizzBuzz")
    }
    else if(current%3==0){
        console.log("Fizz")
    }
    else if(current%5==0){
        console.log("Buzz")
    }
    else{
        console.log(current)
    }
    current =current+1
}


// ChessBoard

let number = 7;
let result= "";

for(let column=0; column<number; column++){
    for(let row=0; row<number; row++){
        if((row+column) %2 ==0){
            result=result+" ";
        }
        else{
            result=result+"#";
        }
    }
    result=result+"\n";
}
console.log(result);

