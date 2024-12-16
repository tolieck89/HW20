let simple_number = parseInt(prompt("Input integer:"));

let is_simple = 0;

if (simple_number<2){
    document.write(simple_number + "is not simple.");
} else {

for (let i = 2; i<simple_number;i++) {
    if (simple_number%i===0){
        is_simple++;
    }
    else {
        continue;
    }
}
}

if (is_simple>0){
    document.write(simple_number + " is not simple.");
} else {
    document.write(simple_number + " is simple.");
}