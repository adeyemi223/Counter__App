let count = 0;

document.getElementById("Increment").onclick = function(){
    count+= 1;
    document.getElementById("countinput").innerHTML = count;
}

document.getElementById("Decrement").onclick = function(){
    count-= 1;
    document.getElementById("countinput").innerHTML = count;
}

document.getElementById("Reset").onclick = function(){
    count = 0;
    document.getElementById("countinput").innerHTML = count;
}