// first
let a = parseInt(prompt("First task. Input a:"));

let b = parseInt(prompt("IFirst task. Input b:"));

if (a>b) {
    console.log("A is bigger, b is less.")
} else if (b>a) {
    console.log("B is bigger, A is less")
} else {
    console.log("The are all equal.")
}


//second

let km = parseFloat(prompt("Second task. Input destination in km"));
let foots = parseFloat(prompt("Second task. Input destination in foot"));

if (km>(0.000305*foots)) {
    console.log("Km is bigger. And better. Foots is achaism. Only meters, only hardcore!");
} else if (km<(0.000305*foots)){
    console.log("Km is lessm but foots sucks anyway!");
} else {
    console.log("They are equal, but...");
}

//third 

let x = parseInt(prompt("Third task. Input X:"));
let y = parseInt(prompt("Third task. Input Y:"));

if (x%y === 0){
    console.log("Y є дільником ікса");
} else {
    console.log("Y не є дільником ікса");
}

if (y%x===0){
    console.log("X є дільником ігрека");
} else {
    console.log("X не є дільником ігрека ");

}

// fourth

let blabla = parseInt(prompt("Fourth task. Input labla:"));

if(blabla%2===0){
    console.log("Blabla is even. Last digit is:", blabla%10);
} else {
    console.log("Blabka is odd. Last digit is: ", blabla%10);
}

// fifth

let fifth = prompt("Fifth task. Input Fifth var: ");

let fifth_1 = parseInt(fifth[0]);
let fifth_2 = parseInt(fifth[1]);




if (fifth_1>fifth_2){
    console.log("First digit is bigger.");
} else if (fifth_1<fifth_2) {
    console.log("Second digit is bigger. But foots sucks anyway. :-)");
} else {
    console.log("They are equal");
}

//sixth 

let sixth = prompt("Sixth task. Input three digits number: ");

let six_1 = parseInt(sixth[0]);
let six_2 = parseInt(sixth[1]);
let six_3 = parseInt(sixth[2]);

let sum_sixth =  six_1 + six_2 + six_3;
let product_sixth = six_1 * six_2 * six_3;

sum_sixth%2===0 ? console.log("It's even") : console.log("It's odd");

sum_sixth%5===0 ? console.log("Int's multiply of five") : console.log("It's not multiply of five");

product_sixth >100 ? console.log("It's bigger than 100") : console.log("It's less or equal 100.");


//seventh    - тут я схитрю і заюзаю число з минулого завдання:-))

if (six_1 === six_2 && six_1 === six_3 && six_2 === six_3){
    console.log("They are all equal.")
} else if (six_1 === six_2 || six_1 === six_3 || six_2 === six_3){
    console.log("Some of them are equal.")
} else {
    console.log("They are all different!")
}

// eightth 

let eight = prompt("Eights task. Input 6digits number: ");

eight_1 = parseInt(eight[0]);
eight_2 = parseInt(eight[1]);
eight_3 = parseInt(eight[2]);
eight_4 = parseInt(eight[3]);
eight_5 = parseInt(eight[4]);
eight_6 = parseInt(eight[5]);


if (eight_1===eight_6 && eight_2 === eight_5 && eight_3 === eight_4){
    console.log("It's a mirror!")
} else {
    console.log("It's not a mirror");
}


///HW-20





