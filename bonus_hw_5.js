let some_integer = parseInt(prompt("Please, input some integer:"));

if (some_integer%3>0){
    document.write(some_integer + " isn't based on 3");
} else {

    while (some_integer%3===0){
        if (some_integer/3 ===1){
            document.write("It's based on 3.");
            break;
        }
        else  {
            some_integer/=3;
            if (some_integer%3>0){
                document.write("It's not based on 3");
                break;
            }
        
        }
    }

}