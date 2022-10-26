let experiments = ['ValueError','KeyError','IndexError','ZeroDivisionError']
function handleSubmitValue(){
    let intOption = document.getElementById("value").value
    let exceptionOption = document.getElementById("exceptionValue").value
    let answer = document.getElementsByClassName("AnswerValue")[0]
    if(!intOption || !exceptionOption)
        answer.innerHTML = "Select all Options"
    else if(intOption === "int" && exceptionOption === "ValueError")
        answer.innerHTML = "Correct! ValueError Exception will be raised\n whenever user enters anything but a number"
    else
        answer.innerHTML = "Incorrect! Try Again"
}
function handleSubmitKey() {
    let keyOption = document.getElementById("key").value
    let exceptionOption = document.getElementById("exceptionKey").value
    let answer = document.getElementsByClassName("AnswerKey")[0]
    if(!keyOption || !exceptionOption)
        answer.innerHTML = "Select all Options"
    else if(keyOption === "employee_name" && exceptionOption === "KeyError")
        answer.innerHTML = "Correct! KeyError will be raised whenever user enters  an employee not in the database"
    else
        answer.innerHTML = "Incorrect! Try Again"
}
function Refresh() {
    location.reload();
}
function changeExperiment(){
    let experiment = document.getElementById("exception-name").value
    experiments.forEach(exp => {
        let elements = document.getElementsByClassName(exp)
        if(exp === experiment){
            elements[0].style.display = 'block'
            elements[1].style.display = 'block'
        }else{
            elements[0].style.display = 'none'
            elements[1].style.display = 'none'
        }
    });
    
}
function TestValueError(){
    var x = document.getElementById("num").value;
    if (!(x>=0)) {
        document.getElementById("demoValue").innerHTML = "ValueError: math domain error";
        document.getElementById("rewardValue").innerHTML = "You are an exception master!";
    }
    else {
        document.getElementById("demoValue").innerHTML = "Square Root of " + x + " is "+ Math.sqrt(x);
        document.getElementById("rewardValue").innerHTML = "You need a little more rebellion. Try again!";
        document.getElementById("refreshValue").style.display='block';
    }
    event.currentTarget.value = "";

}
function TestKeyError(){
    let name = document.getElementById("name").value
    let age = -1
    if(name == 'John')
        age = 30
    else if(name == 'Adam')
        age = 28
    else if(name == 'Jack')
        age = 37
    console.log(age)
    if(age == -1){
        document.getElementById("demoKey").innerHTML = "KeyError: '" + name+"'";
        document.getElementById("rewardKey").innerHTML = "You are an exception master!";
    }else{
        document.getElementById("demoKey").innerHTML = "Age of " + name + " is " + age;
        document.getElementById("rewardKey").innerHTML = "You need a little more rebellion. Try again!";
        document.getElementById("refreshKey").style.display='block';
    }
    event.currentTarget.value = "";
}