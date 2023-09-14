// Finn Heinemann
// Chapter 3 Homework

// Exercise 1 - Minimum

function smallestNum(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        if (num1 < num2) {
            console.log(num1);
        }
        else {
            console.log(num2);
        }
    }
    else {
        console.log("Please enter two numbers!");
    }
}

// Try if the function works

smallestNum(-100, 5)

// Exercise 2 - Recusion

function isEven(number) {
    if (number < 0 || number % 1 != 0) {
        console.log("Please enter a positive, whole number!");
    }
    else {
        if (number == 0) {
            console.log(true);
        }
        else if (number == 1) {
            console.log(false);
        }
        else {
            isEven(number - 2);
        }
    }
}

// Try if the function works

isEven(56)

// Exercise 3 - Bean Counting

// Write countBs function

function countBs(string) {
    let Bs = 0;
    for (let position = 0; position <= (string.length - 1); position = position + 1) {
        if (string[position] == "B") {
            Bs = Bs + 1;
        }
    }
    console.log(Bs);
}

countBs("BllaBlabla")

// Write the more universal version

function countChar(string, char) {
    let Chars = 0;
    for (let position = 0; position <= (string.length - 1); position = position + 1) {
        if (string[position] == char) {
            Chars = Chars + 1;
        }
    }
    console.log(Chars);
}

countChar("Hello there!", "e")

