let database = firebase.database().ref()
let casualButton = document.querySelector(".casual");
let rankedButton = document.querySelector(".ranked");
let casualorranked = "Casual";
let blogList = [];
let casualList = [];
let rankedList = [];
let newBlog;
let messageContainer = document.querySelector('.lfg_div');
let logo = document.querySelector("img");
let pees;
let state=1;

database.on('child_added',addBlog);

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

function addBlog(rowData){
    let row = rowData.val();
    blogList.push(row);
    console.log(row)
        if(row.PLAYSTYLE=="Casual"){
            casualList.push(row);
        }
        else if(row.PLAYSTYLE=="Ranked"){
            rankedList.push(row);
        }
        const pElement  = document.createElement('p');
        pElement.classList.add("newLFG");
        pElement.innerHTML = `${row.TIMESTAMP}: ${row.DISCORD}:${row.REGION}:${row.IGN}:${row.GAME}:${row.RANK}:${row.PLAYSTYLE}:${row.GENDER}:${row.MESSAGE}`
        messageContainer.appendChild(pElement);
}

casualButton.addEventListener("click", selectCasual);
rankedButton.addEventListener("click", selectRanked);

function selectCasual(){
    if(casualorranked=="Ranked"){
        rankedButton.style.backgroundColor="var(--backgroundColorTwo)";
    }
    casualButton.style.backgroundColor="var(--backgroundColor)";
    pees = document.querySelectorAll(".newLFG");
    for(let i=0; i<pees.length; i++){
        pees[i].remove();
    }
    for(let i=0; i<casualList.length; i++){
        let a = casualList[i];
        const pElement  = document.createElement('p');
        pElement.classList.add("newLFG");
        pElement.innerHTML = `${a.TIMESTAMP}: ${a.DISCORD}:${a.REGION}:${a.IGN}:${a.GAME}:${a.RANK}:${a.PLAYSTYLE}:${a.GENDER}:${a.MESSAGE}`
        messageContainer.appendChild(pElement);
    }
    casualorranked = "Casual";
}

function selectRanked(){
    if(casualorranked=="Casual"){
        casualButton.style.backgroundColor="var(--backgroundColorTwo)";
    }
    rankedButton.style.backgroundColor="var(--backgroundColor)";
    pees = document.querySelectorAll(".newLFG");
    for(let i=0; i<pees.length; i++){
        pees[i].remove();
    }
    for(let i=0; i<rankedList.length; i++){
        let a = rankedList[i];
        const pElement  = document.createElement('p');
        pElement.classList.add("newLFG");
        pElement.innerHTML = `${a.TIMESTAMP}: ${a.DISCORD}:${a.REGION}:${a.IGN}:${a.GAME}:${a.RANK}:${a.PLAYSTYLE}:${a.GENDER}:${a.MESSAGE}`
        messageContainer.appendChild(pElement);
    }
    casualorranked = "Ranked";
}