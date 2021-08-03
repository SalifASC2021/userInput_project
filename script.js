let username = document.querySelector("#username");
let password = document.querySelector("#password");
let button = document.querySelector("#submit-button");
let body = document.querySelector("body");
let error = document.querySelector("#error");

button.onclick = function(event) {
    event.preventDefault();   //This Stops Refreshing

    let userValue = username.value;
    let passValue = password.value;

    if(userValue == "Baby Yoda" && passValue == "Squirtle") {
        console.log("Youre correct");
        success.style.display = "block";
        error.style.display = "none";
        body.style.backgroundColor = "lightblue"
    }
    else{
        console.log("Youre Wrong");
        error.style.display = "block";
        success.style.display = "none"
        body.style.backgroundColor = "rgb(50,50,50)";

    }

    username.value= " ";
    password.value =" ";
}
