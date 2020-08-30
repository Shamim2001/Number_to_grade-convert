let per= prompt("Please enter your number");
// let per= 68;
if(per>=80 && per<=100){
    document.write("Your number Is A+")
} else if(per>=70 && per<=79){
    document.write("Your number  Is A-")
} else if(per>=60 && per<=69){
    document.write("Your number  IsA")
}  else if(per>=50 && per<=59){
    document.write("Your number Is B")
} else if(per>=33 && per<=49){
    document.write("Your number Is C")
} else if(per <= 32){
    document.write("Your number Is Fall")
}else{
    document.write("Please Enter Valid Number")
}
