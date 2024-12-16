let natural_input;

do {
    natural_input =parseInt(prompt("Input a natural number: "));
} while (!(natural_input>0));

let natural_quantity = 0;
let natural_sum = 0;

for (let i = 2; i < natural_input;i++){
    if (natural_input%i===0){
        document.write(i + ", ");

        if (i%2===0){
            sum+=i;
            natural_quantity++;
        }

    }
}
document.write("<br>");
document.write("Sum of even divisors is " + sum  + "<br>");
document.write("Quantity of even divisors is " + natural_quantity  + "<br>");



