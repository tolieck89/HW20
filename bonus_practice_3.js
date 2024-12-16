str = "";

for (i = 1;i<11;i++){
    if (i<10){
    str+=7*i + ", ";}
    else {
        str+=7*i; 
    }
}

document.write("<p>" + str + "</p>");