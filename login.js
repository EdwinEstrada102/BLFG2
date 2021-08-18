let userLogin = [
    {
    username: "Juice",
    password: "poop",
    },
    {
    username: "stinky",
    password:"poo",
    },

    {
        username: "DeezNutz6138",
        password: "joe_mama"
    },

    {
        username: "Jeremie",
        password: "Peart"
    }

]

let state = 1;

// let r = document.getElementById("R").value
// let g = document.getElementById("G").value
// let b = document.getElementById("B").value


let logo = document.querySelector("img");
let styleButton = document.getElementById("style");
let root = document.querySelector(":root");
styleButton.addEventListener("click", changeStyle);
function changeStyle(){
    state *= -1;
    if(state==-1){
        root.style.setProperty("--backgroundColor", "rgb(10,13,148)");
    root.style.setProperty("--backgroundColorTwo", "white");
    logo.src="/images/blue.png";
    }
    else{
        root.style.setProperty("--backgroundColor", "rgb(51,192,51)");
    root.style.setProperty("--backgroundColorTwo", "black");
    logo.src="/images/green.png";
    }
}



function getInfo(){
    let username = document.getElementById("username").value;
    let password = document.getElementById('password').value;

    for(i = 0; i <userLogin.length; i++){
        if(username == userLogin[i].username && password == userLogin[i].password){
      
           
            alert("you are logged in")
            window.location.href = "createblog.html"
            return;
        }

     }
     alert("incorrect username or password")
    }

