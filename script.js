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
function handleSubmitIndex() {
    let rangeOption = document.getElementById("range").value
    let deleteOption = document.getElementById("delete").value
    let exceptionOption = document.getElementById("exceptionIndex").value
    let answer = document.getElementsByClassName("AnswerIndex")[0]
    if(!deleteOption || !exceptionOption || !rangeOption)
        answer.innerHTML = "Select all Options"
    else if(rangeOption === "range(len(arr))" && exceptionOption === "IndexError" && deleteOption === "del arr[i]")
        answer.innerHTML = "Correct! IndexError will be raised and caught as soon as all elements in the array are processed."
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
    if(!isNaN(x) && !isNaN(parseInt(x))){
        document.getElementById("demoValue").innerHTML = `ValueError: invalid literal for int() with base 10: '${x}'`;
        document.getElementById("rewardValue").innerHTML = "You are an exception master!";
        return
    }
    x = parseInt(x)
    if (!(x>=0)) {
        document.getElementById("demoValue").innerHTML = "ValueError: math domain error";
        document.getElementById("rewardValue").innerHTML = "You are an exception master!";
        document.getElementById("refreshValue").style.display='none';
    }
    else {
        document.getElementById("demoValue").innerHTML = "Square Root of " + x + " is "+ Math.sqrt(x);
        document.getElementById("rewardValue").innerHTML = "You need a little more rebellion. Try again!";
        document.getElementById("refreshValue").style.display='block';
    }
    event.currentTarget.value = "";
}
function TestIndexError(){
    var x = document.getElementById("index").value;
    if(!/^-?\d+$/.test(x)){ // Checking if it is a number or not
        document.getElementById("demoIndex").innerHTML = `ValueError: invalid literal for int() with base 10: '${x}'`;
        document.getElementById("rewardIndex").innerHTML = "You generated a ValueError. Try Again!";
        document.getElementById("refreshIndex").style.display='block';
    }else{
        x = parseInt(x)
        if (x >= 9 || x < -9) {
            document.getElementById("demoIndex").innerHTML = "IndexError: list index out of range";
            document.getElementById("rewardIndex").innerHTML = "You are an exception master!";
            document.getElementById("refreshIndex").style.display='none';
        }
        else {
            fibonacci = [1,1,2,3,5,8,13,21,34]
            if(x >= 0)
                document.getElementById("demoIndex").innerHTML = `${fibonacci[x]} is requested number`;
            else
                document.getElementById("demoIndex").innerHTML = `${fibonacci[x+9]} is requested number`;
            document.getElementById("rewardIndex").innerHTML = "You need a little more rebellion. Try again!";
            document.getElementById("refreshIndex").style.display='block';
        }
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
        document.getElementById("refreshKey").style.display='none';
    }else{
        document.getElementById("demoKey").innerHTML = "Age of " + name + " is " + age;
        document.getElementById("rewardKey").innerHTML = "You need a little more rebellion. Try again!";
        document.getElementById("refreshKey").style.display='block';
    }
    event.currentTarget.value = "";
}