let rand_int = parseInt(prompt("Input integer:"));

for (let i = 1; i<101; i++){
    if (i**2 <= rand_int){
        document.write(i + " ");
    }
}