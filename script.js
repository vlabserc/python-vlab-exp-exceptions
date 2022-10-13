function Test() {
    var x = document.getElementById("num").value;
    if (!(x>=0)) {
        document.getElementById("demo").innerHTML = "ValueError: math domain error";
        animate(1);
    }
    else {
        document.getElementById("demo").innerHTML = "Square Root of " + x + " is "+ Math.sqrt(x);
        animate(-1);
        event.currentTarget.value = "";
    }

}
function animate(i) {
    if(i==1){
        document.getElementById("reward").innerHTML = "You are an exception master!";
    } else {
        document.getElementById("reward").innerHTML = "You need a little more rebelion. Try again!";
        document.getElementById("refresh").style.display='block';
    }
}
function handleSubmit(){
    console.log("yes")
    let intOption = document.getElementById("int").value
    let exceptionOption = document.getElementById("exception").value
    let answer = document.getElementsByClassName("Answer")[0]
    if(!intOption || !exceptionOption)
        answer.innerHTML = "Select all Options"
    else if(intOption === "int" && exceptionOption === "ValueError")
        answer.innerHTML = "Correct! ValueError Exception will be raised\n whenever user enters anything but a number"
    else
        answer.innerHTML = "Incorrect! Try Again"
}
function Refresh() {
    location.reload();
}