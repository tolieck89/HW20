//second

let second_str = "";

for (i=10;i<21;i++){
    if (i===20){
        second_str+=i**2;
    } else {
        second_str+=i**2 + ", ";
    }
}

document.write("<p>" + second_str + "</p>");