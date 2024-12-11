let birthyear = prompt("Input your birth year: ");
let age = 2024 - parseInt(birthyear);

if (birthyear === null) 
    { console.log("It's sow sad you didn't want to input your birthyear 🤬");
} else if (age<0 || age>110) {    //перевірка на реалістичність
    console.log("Please, input realistyc date.");
} else {
    console.log(" You're ", age, " years old.");
}

let town = prompt("Where do you live?");

if (town === null) {
    console.log("It's sow sad you didn't want to input your town 🤬");
} else  {
    switch (town) {   // тут вирішив заюзати світч, щоб не генерити купу майже однакових іфів. 

        case "London":
            console.log("You're from London, capital of UK");
            break;
        case "Kyiv":
            console.log("You're from Kyiv, capital of UA");
            break;
        case "Washington":
            console.log("You're from Washington, capital of USA");
            break;
            default: 
            console.log("You live in  ", town);
            break;
}
}

let sport = prompt("Please input your favourite kind of sport: ");

if (sport === null) {
    console.log("It's sow sad you didn't want tell us about Ur favourite kind of sport 🤬");
} else  {
    console.log("Your favourite kind of sport is ", sport);

} 



















