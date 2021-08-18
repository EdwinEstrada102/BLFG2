let button = document.querySelector("#create");
let casualButton = document.querySelector(".casual");
let rankedButton = document.querySelector(".ranked");
let database = firebase.database().ref();
let discord = document.getElementById("discord");
let region = document.getElementById("region");
let ign = document.getElementById("ign");
let rank = document.getElementById("rank");
let game = document.getElementById("game");
let gender = document.getElementById("gender");
let lfg = document.getElementById('lfg');
let logo = document.querySelector("img");
let state = 1;
let casualorranked = "Casual";

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

button.addEventListener("click", updateDB);
casualButton.addEventListener("click", selectCasual);
rankedButton.addEventListener("click", selectRanked);

function selectCasual(){
    if(casualorranked=="Ranked"){
        rankedButton.style.backgroundColor="var(--backgroundColorTwo)";
    }
    casualButton.style.backgroundColor="var(--backgroundColor)";
    casualorranked = "Casual";
}

function selectRanked(){
    if(casualorranked=="Casual"){
        casualButton.style.backgroundColor="var(--backgroundColorTwo)";
    }
    rankedButton.style.backgroundColor="var(--backgroundColor)";
    casualorranked = "Ranked";
}

function updateDB(event){
    event.preventDefault();
    const discordInput = discord.value;
    const regionInput = region.value;
    const ignInput = ign.value;
    const rankInput = rank.value;
    const gameInput = game.value;
    const playstyleInput = casualorranked;
    const genderInput = gender.value;
    const lfgInput = lfg.value;
    
    discord.value = "";
    region.value = "";
    ign.value = "";
    rank.value = "";
    game.value = "";
    casualButton.style.backgroundColor="white";
    rankedButton.style.backgroundColor="white";
    gender.value = "";
    lfg.value = "";

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let value = {
        DISCORD:discordInput,
        REGION:regionInput,
        IGN:ignInput,
        RANK:rankInput,
        GAME:gameInput,
        PLAYSTYLE:playstyleInput,
        GENDER:genderInput,
        TIMESTAMP:dateTime,
        MESSAGE:lfgInput
    };
    console.log(value)
    
    database.push(value);
    window.location.href = "index.html"
}
